const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json()); // transforma informações recebidas em JSON

/* Rota com caminho '/', utilizando o método GET */
app.get('/', function (req, res) {
  res.send('hello world');
});

/* Rota com caminho '/', utilizando o método POST */
app.post('/', function (req, res) {
  res.send('hello world');
});

/* Rota com caminho '/' para qualquer método HTTP */
app.all('/', function (req, res) {
  res.send('hello world');
});

/* Ou podemos encadear as requisições para evitar repetir o caminho */
app
  .route('/')
  .get(function (req, res) {
    res.send('hello world get');
  })
  .post(function (req, res) {
    res.send('hello world post');
  });

// 
const langs = ["CSS", "JavaScript", "html", "React"];

app.get('/langs', function (rec, res) {
  res.send(langs)
});

app.post('/langs', function(req, res) {
  const { name } = req.body;
  langs.push(name);
  res.send(`Linguagem ${name} adicionada com sucesso`)
})
  
app.listen(3000, function () {
  console.log('Example app listening on port 3000');
});

// autenticação

const authMiddleware = require('./auth-middleware');

app.get('/aberto', (req, res) => {
  res.status(200).json({ message: 'Eu posso ser acessado sem autenticação.' });
});

app.get('/secure', authMiddleware, (req, res) => {
  res.status(200).json({
    message:
      'se esse middleware foi chamado pelo Express, é porque deu tudo certo dentro de `authMiddleware`, e o `next` foi chamado',
  });
});

app.get('/otherSecure', authMiddleware, (req, res) => {
  res.status(200).json({
    message: 'podemos utilizar o mesmo middleware pra quantas rotas quisermos',
  });
});

/*caso queiramos saber quanto tempo durou uma request, podemos adicionar 
um middleware que nos informa o momento em que ela foi recebida:*/

function timeMiddleware(req, res, next) {
  req.startTime = Date.now();
  next();
}

app.get('/tempo', timeMiddleware, (req, res) => {
  const endTime = Date.now() - req.startTime;
  res.status(200).json({
    message: `essa request foi processada em ${endTime} milissegundos`,
  });
});

/* podem ser registrados para a aplicação toda de uma vez com o método
use do nosso app. Dessa forma, todas as rotas que vierem depois de 
app.use(timeMiddleware) irão automaticamente ter esse middleware executado
antes dos middlewares específicos daquela rota . Isso quer dizer que todo 
middleware de rota terá disponível a informação req.startTime .*/

/*function timeMiddleware(req, res, next) {
  req.startTime = Date.now();
  next();
}

app.use(timeMiddleware);

app.get('/tempo', (req, res) => {
  const endTime = Date.now() - req.startTime;
  res.status(200).json({
    message: `essa request foi processada em ${endTime} milissegundos`,
  });
});*/

