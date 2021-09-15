//1
let alter1 = 23;
{
  let alter2 = 24;
  console.log(alter2);
}
console.log(alter1);
console.log('_____');
//Es wird als erstes 24 ausgegeben und danach 23, da das  let alter außerhalb der Klammern
//das let alter innerhalb der Klammern nicht kennt. (let hat scope constraints)

//2
var alter3 = 23;
{
  var alter4 = 24;
  console.log(alter4);
}
console.log(alter3);
console.log('_____');
//Es wird zweimal 24 ausgegeben, da var kein scope constraint hat.

//3
let alter5 = 23;
{
  var alter6 = 24;
  console.log(alter6);
}
console.log(alter5);
console.log('_____');
//Es gibt keine Ausgabe (Fehler), da im let scope, welche die ganze Angabe ist,
//durch var noch einmal alter festgelegt ist, was nicht funktioniert.

// //4
var alter7 = 23;
{
  let alter8 = 24;
  console.log(alter8);
}
console.log(alter7);
console.log('_____');
//Ausgabe ist 24 und 23, da let im eigenen scope ist und nicht mit var kämpft.

//5
//Gib alle Zahlen von 1 bis 50 aus.
for (let i = 1; i <= 50; i++) {
  console.log(i);
}
console.log('_____');

//6
//Gib alle Zahlen von 100 bis 1 (abwärts) aus, die durch 2 teilbar sind. Sei dabei möglichst effizient!
for (let i = 100; i >= 1; i--) {
  console.log(i);
  i = i - 1;
}
console.log('_____');

for (let i = 100; i >= 1; i = i - 2) {
  console.log(i);
}
console.log('_____');

//7
//Erstelle eine Funktion, der du eine Zahl übergibst und gib alle Zahlen bis zu dieser Zahl aus.

console.log('_____');

//8
//Erstelle eine Funktion, der du eine Zahl übergibst und summiere alle Zahlen bis zu dieser Zahl. Gib diese Zahl als Rückgabewert zurück und dann aus.

console.log('_____');

//9
//  Gegeben ist ein Array von Zahlen. Bestimme mit allen Looparten die höchste und die kleinste Zahl!

console.log('_____');

//10
//Erstelle eine Funktion avg, die von einem Array, das als Argument übergeben wird, den Durchschnittberechnet.

console.log('_____');
