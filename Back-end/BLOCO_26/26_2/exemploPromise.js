const fs = require('fs');

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {

    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });

  });
}

// readFilePromise('./exemploDivisao.js') // aqui vai dar certo
readFilePromise('./file.txt') // A função me promete que vai ler o arquivo (como não tem esse arquivo cai no erro)
  .then((content) => { // Caso ela cumpra o que prometeu
    console.log(`Lido arquivo com ${content.byteLength} bytes`); // Escrevo o resultado no console
  })
  .catch((err) => { // Caso ela não cumpra o que prometeu
    console.error(`Erro ao ler arquivo: ${err.message}`); // Escrevo o erro no console
  });

  
/* Vamos entender o que estamos fazendo aqui:
1. Recebemos, como parâmetro, o nome do arquivo que queremos ler, na linha 3;
2. Criamos e retornamos uma nova Promise, na linha 4;
3. Chamamos o módulo nativo do node, fs , para realizar a leitura desse arquivo, na linha 6;
4. Na linha 7, dentro da callback que passamos para a função readFile , verificamos se ocorreu um erro. Se sim, rejeitamos a Promise e encerramos a execução;
5. Caso não tenha acontecido nenhum erro, resolvemos a Promise com o resultado da leitura do arquivo. */
