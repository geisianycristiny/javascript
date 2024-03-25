/*
Questão 11: Qual é a diferença entre let, const e var em JavaScript?
*/

// var
var a = 10;
if (true) {
    var b = 20;
}
console.log(a); // Output: 10
console.log(b); // Output: 20

// let
let c = 30;
if (true) {
    let d = 40;
}
// console.log(c); // Output: 30
// console.log(d); // Error: d is not defined

// const
const e = 50;
// e = 60; // Error: Assignment to constant variable.