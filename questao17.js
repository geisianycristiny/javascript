/*
Questão 17: Como você pode adicionar uma propriedade a um objeto em 
JavaScript?
*/

let meuObjeto = {};

let chave = "idade";
let valor = 25;

// Adicionando uma propriedade dinamicamente usando a notação de colchetes
meuObjeto[chave] = valor;

console.log(meuObjeto); // Output: { idade: 25 }