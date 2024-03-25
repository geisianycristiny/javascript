/*
Questão 20: Como você pode chamar uma função de retorno de chamada em 
JavaScript?
*/

function minhaFuncao(callback) {
    // Faz alguma operação...
    let resultado = 10;
    // Chama a função de retorno de chamada com o resultado
    callback(resultado);
}

// Chamando a função de retorno de chamada usando arrow function
minhaFuncao((resultado) => {
    console.log("O resultado é:", resultado);
});