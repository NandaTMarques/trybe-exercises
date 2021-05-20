/*1.Criar uma nova aplicação Express;
2. Dizer ao Express que, quando uma requisição com método GET for
recebida no caminho /hello , a função handleHelloWorldRequest deve ser chamada;
3. Pedir ao Express que crie um servidor HTTP e escute por requisições na porta 3000;
4. Ao tratar uma requisição <abbr title="Com método GET no 
caminho /hello "> GET /hello </abbr>, enviar o status 
<abbr title="Status HTTP que significa OK">200</abbr> 
e a mensagem "Hello, world!".*/

const express = require('express');

const app = express(); // 1 

app.get('/hello', handleHelloWorldRequest);// 2

app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000');// 3
}); 

function handleHelloWorldRequest(req, resp) {
  resp.status(200).send('Hello World!'); // 4
}