const fs = require('fs');

const nomeDoArquivo = 'meu-arquivo.txt';

try {
  const data = fs.readFileSync(nomeDoArquivo, 'utf8');
  console.log(data);
} catch (err) {
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err);
}

/* Método fs.readFileSync
Esse método é responsável por ler arquivos e trazer seu conteúdo para dentro do Node.js. Por ser síncrono , ele espera a leitura do arquivo terminar para, só então, atribuir o resultado à constante data .
O método readFileSync recebe dois parâmetros:
O nome do arquivo;
Um parâmetro opcional que, quando é uma string, define o encoding que será utilizado durante a leitura do arquivo.
Mas e se ocorrer um erro na leitura do arquivo?
Com funções síncronas, como readFileSync , você deve tratar explicitamente os erros que puderem acontecer. Nesse exemplo, usamos um bloco try...catch para capturar quaisquer erros que possam acontecer durante a leitura do arquivo e imprimimos uma mensagem para o usuário no terminal.
Agora vamos resolver o probleminha que estamos tendo ao tentar ler o arquivo!
Nota : Antes de continuar, não se esqueça de criar um arquivo meu-arquivo.txt com algum conteúdo dentro!
Ao rodar o script readFileSync.js com o comando node readFileSync.js , você deverá ver o conteúdo do seu arquivo impresso no terminal.*/