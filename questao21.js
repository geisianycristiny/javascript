/*
Questão 21: Como você pode verificar se um objeto contém uma determinada 
propriedade em JavaScript?
*/

let pessoa = {
    nome: "João",
    idade: 30
};

console.log(pessoa["nome"] !== undefined); // Output: true
console.log(pessoa["email"] !== undefined); // Output: false