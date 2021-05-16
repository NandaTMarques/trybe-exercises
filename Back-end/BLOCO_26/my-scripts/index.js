const readline = require('readline-sync');

function scripts() {
  const scripts = [
    {name: 'Calcula IMC', script: './imc5.js'},
    {name: 'Velocidade Média', script: './velocidade.js'},
    {name: 'Jogo Advinhação', script: './sorteio.js'}
  ]

  const pergunta = scripts.map((script, index) => {
    `${index + 1} - ${script.name}. Qual o número do script você quer executar? `
  }); // ver o que houve de errado???

  const qualScript = readline.questionInt('Qual script você quer executar? ') - 1;

  const script = scripts[qualScript];

  require(script.script);
}

scripts();
