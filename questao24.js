/*
Questão 24: Como você pode adicionar um evento de clique a um elemento 
HTML em JavaScript?
*/

let botao = document.getElementById("meuBotao");

botao.onclick = function() {
    alert("Você clicou no botão!");
};