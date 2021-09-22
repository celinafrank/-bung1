//1
let alter1 = 23;
{
  let alter2 = 24;
  console.log(alter2);
}
console.log(alter1);
console.log('1_____');
//Es wird als erstes 24 ausgegeben und danach 23, da das  let alter außerhalb der Klammern
//das let alter innerhalb der Klammern nicht kennt. (let hat scope constraints)

//2
var alter3 = 23;
{
  var alter4 = 24;
  console.log(alter4);
}
console.log(alter3);
console.log('2_____');
//Es wird zweimal 24 ausgegeben, da var kein scope constraint hat.

//3
let alter5 = 23;
{
  var alter6 = 24;
  console.log(alter6);
}
console.log(alter5);
console.log('3_____');
//Es gibt keine Ausgabe (Fehler), da im let scope, welche die ganze Angabe ist,
//durch var noch einmal alter festgelegt ist, was nicht funktioniert.

// //4
var alter7 = 23;
{
  let alter8 = 24;
  console.log(alter8);
}
console.log(alter7);
console.log('4_____');
//Ausgabe ist 24 und 23, da let im eigenen scope ist und nicht mit var kämpft.

//5
//Gib alle Zahlen von 1 bis 50 aus.
for (let i = 1; i <= 50; i++) {
  console.log(i);
}
console.log('5_____');

//6
//Gib alle Zahlen von 100 bis 1 (abwärts) aus, die durch 2 teilbar sind. Sei dabei möglichst effizient!
for (let i = 100; i >= 1; i--) {
  console.log(i);
  i = i - 1;
}
console.log('6.1_____');

for (let i = 100; i >= 1; i = i - 2) {
  console.log(i);
}
console.log('6.2_____');

//7
//Erstelle eine Funktion, der du eine Zahl übergibst und gib alle Zahlen bis zu dieser Zahl aus.
function beispiel7(A) {
  for (var i = 0; i <= A;){
    console.log(i);
    i++;
  }
}
beispiel7(9)
console.log('7_____');

//8
//Erstelle eine Funktion, der du eine Zahl übergibst und summiere alle Zahlen bis zu dieser Zahl. Gib diese Zahl als Rückgabewert zurück und dann aus.
const funcAddition = function (startValue) {
  let sum = 0;
  for (let i = 1; i < startValue; i++) {
    sum += i;
  }
  return sum;
};
console.log('summe:' + funcAddition(5));
console.log('8_____');

//9
//  Gegeben ist ein Array von Zahlen. Bestimme mit allen Looparten die höchste und die kleinste Zahl!
let zahlen = [0, 11, 2, 3, 4, 5, 3, 6, -7, 8, 9, 10];
let maxNumber = zahlen[0];
let minNumber = zahlen[0];
for (let i = 0; i < zahlen.length; i++){
  if (zahlen[i] > maxNumber) {
    maxNumber = zahlen[i];
  }
  if (zahlen[i] < minNumber) {
    minNumber=zahlen[i];
  }
}
console.log("max:" + maxNumber);
console.log("min:" + minNumber);
console.log('9.1_____');


//const und function machen das gleiche, Unterschied ist das function ganz nach oben geschoben wird
//und const erst dann existiert in der Zeile wo es definiert ist.
//const in zeile 14 geschrieben existiert nicht in Zeile 11.
const randomNumbers = () => Math.floor(Math.random() * 100);
// function randomNumbers() {
//   return Math.floor(Math.random() * 100);
// }
function fillarray(max) {
  let array = [];
  for (let index = 0; index < max; index++) {
    let erg = randomNumbers();
    array.push(erg)
  }
  return array;
}
let neuesArray = fillarray(5)
let min = neuesArray[0];
let max = neuesArray[0];


//Alle 3 funktionieren
neuesArray.forEach(function (zahl) {
  if (zahl > max) {
    max = zahl;
  }
  if (zahl < min) {
    min = zahl;
  }
});

// neuesArray.forEach((zahl) => {
//   zahl < min ? (min = zahl) : min
//   zahl > max ? (max = zahl) : max
// });

// for (const zahl of neuesArray) {
//   if (zahl > max) {
//     max = zahl;
//   }
//   if (zahl < min) {
//     min = zahl;
//   }
// }

console.log(neuesArray);
console.log(min);
console.log(max);
console.log('9.2_____');


const secondArray = { a: 1, b: 2 };
for (const zahl in neuesArray) {
  const element = neuesArray[zahl];
  if (element > max) {
    max = element;
  }
  if (neuesArray < min) {
    min = element;
  }
}
console.log(`array:${neuesArray} Max:${max} Min:${min}`);
console.log('9.3_____');

//10
//Erstelle eine Funktion avg, die von einem Array, das als Argument übergeben wird, den Durchschnittberechnet.
function avg(array){
  let avg = 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++){
    sum = sum + array[i];
  }
  avg = sum / array.length;
  return avg;
}
console.log(avg(neuesArray));
console.log('10_____');
