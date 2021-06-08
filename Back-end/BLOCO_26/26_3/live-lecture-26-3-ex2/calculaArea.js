

const readline = require('readline-sync');

function calculaArea(altura, largura){
    return altura * largura;
}

function solicitaValores(){
    const altura = readline.questionInt('Digite o valor da altura');
    const largura = readline.questionInt('Digite o valor da largura');

    return {
        altura, largura
    }
}

function start (){
    const {
        altura,
        largura
    } = solicitaValores()

    const area = calculaArea(altura, largura)
    return area
}

module.exports = start