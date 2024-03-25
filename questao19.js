/*
Questão 19: Como você pode definir uma função de retorno de chamada 
(callback) em JavaScript?
*/

function minhaFuncao(callback) {
    // Fazendo alguma operação...
    let resultado = 10;
    // Chamando a função de retorno de chamada com o resultado
    callback(resultado);
}

minhaFuncao((resultado) => {
    console.log("O resultado é:", resultado);
});