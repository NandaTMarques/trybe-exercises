const readline = require('readline-sync');

function calculaImc () {
  const peso = readline.questionInt('Qual o seu peso em kg?  ');
  const altura = readline.questionInt('Qual a sua altura em cm?  ');
  const icmCalc = ((peso / altura ** 2) * 10000).toFixed(2);

  if (icmCalc < 18.5) {
    console.log(`O seu peso é ${peso} Kg, sua altura é ${altura} cm e seu imc é ${icmCalc}. Situação: Abaixo do peso (magreza).`);
    return;
  }

  if (icmCalc >= 18.5 && icmCalc < 25) {
    console.log(`O seu peso é ${peso} Kg, sua altura é ${altura} cm e seu imc é ${icmCalc}. Situação: Peso normal.`);
    return;
  }

  if (icmCalc >= 25 && icmCalc < 30) {
    console.log(`O seu peso é ${peso} Kg, sua altura é ${altura} cm e seu imc é ${icmCalc}. Situação: Acima do peso (sobrepeso).`);
    return;
  }

  if (icmCalc >= 30 && icmCalc < 35) {
    console.log(`O seu peso é ${peso} Kg, sua altura é ${altura} cm e seu imc é ${icmCalc}. Situação: Obesidade grau I.`);
    return;
  }

  if (icmCalc >= 35 && icmCalc < 40) {
    console.log(`O seu peso é ${peso} Kg, sua altura é ${altura} cm e seu imc é ${icmCalc}. Situação: Obesidade grau II.`);
    return;
  }

  console.log(`O seu peso é ${peso} Kg, sua altura é ${altura} cm e seu imc é ${icmCalc}. Situação: Obesidade graus III e IV.`);
}

calculaImc();