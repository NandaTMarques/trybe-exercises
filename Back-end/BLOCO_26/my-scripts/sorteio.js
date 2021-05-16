const readline = require('readline-sync');

function jogar() {
  const numeroRandom = Math.floor(Math.random() * 10); // retorna um numero randomico entre 0 e 1, mas menor que 1, 0.4125, ai multiplicamos por 10 pra dar um inteiro. Usamos a Math.floor pra retirar a parte flutuante e ficar só o inteiro.
  const respostaJogador = readline.questionInt('Tente adivinhar qual o número de 0 a 10 que pensei: ');

  function jogarNovamente(){
    const jogarNovamente = readline.question('Você quer jogar novamente? ').toUpperCase();
    if (jogarNovamente !== 'SIM') {
      console.log('Ok. Não desista, até mais!');
    } else {
      jogar();
    }
  }

  if (numeroRandom === respostaJogador) {
    console.log(`Parabéns, você acertou, o número que pensei é ${numeroRandom}.`);
  } else {
    console.log(`Que pena, você errou. O número que pensei foi ${numeroRandom}.`);
  }
  jogarNovamente();
}
jogar();