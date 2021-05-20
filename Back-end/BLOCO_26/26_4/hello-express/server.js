const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/hello', (req, res) => {
  // req.body agora está disponível
  res.status(200)
    .json({
      greeting: `Hello, ${req.body.name}!`
    });
});

app.listen(3000, () => { console.log('Listening'); });

/*o módulo body-parser , que citamos mais cedo. Ele é um middleware 
que lê o corpo da request, cria nela uma propriedade body e coloca 
o conteúdo do corpo lá. A função json() utilizada na linha 5 diz ao
body-parser que queremos um middleware que processe corpos de 
requisições escritos em JSON.

ℹ️ Faça o teste ℹ️ : Copie o script acima, cole-o num arquivo chamado server.js e execute-o com o comando node server.js . Em seguida, abra o Postman ou o Insomnia e realize a request POST localhost:3000/hello , passando o JSON { "name": "<seu nome aqui">" } .
Experimente comentar a linha 5 do script, executar novamente o arquivo e realizar uma nova request para o endpoint POST /hello e perceba que, sem o body-parser , req.body é undefined .*/

