const readline = require('readline-sync');

function velocidadeMedia() {
  const distancia = readline.questionInt('Qual a distancia em metros? ');
  const tempo = readline.questionInt('Qual o tempo em segundos? ');
  const velMedia = (distancia / tempo).toFixed(2);
  console.log(`A velocidade média é ${velMedia} m/s.`);
}

velocidadeMedia();