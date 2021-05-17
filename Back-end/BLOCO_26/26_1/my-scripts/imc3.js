const readLine = require('readline-sync');

function imc() {
  const peso = readLine.questionFloat('Qual o seu peso? ');
  const altura = readLine.questionFloat('Qual a sua altura? ');
  const icmCalc = ((peso / altura ** 2) * 10000).toFixed(2)
  
  console.log(`O seu peso é ${peso} Kg, sua altura é ${altura} cm e seu imc é ${icmCalc}.`);
};

imc();

