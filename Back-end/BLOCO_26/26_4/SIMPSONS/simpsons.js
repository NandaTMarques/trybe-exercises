// simpsons.js
const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.send('Hello World!');
});

router.get('/homer', function (req, res) {
  res.send('Hello Homer!');
});

module.exports = router;

/*O Router é um middleware que "agrupa" várias rotas em um mesmo lugar, como se fosse uma versão mini do app do Express. Ele é depois "plugado" no "app principal".

Repare no uso de mais um parâmetro na chamada à função app.use . Isso diz ao Express que queremos que aquele middleware (no caso o router) seja executado para qualquer rota que comece com aquele caminho. Repare que, ao registrar uma rota no router, não precisamos repetir a parte do caminho que já passamos para app.use . É por isso que a rota que definimos com router.get('/homer') na verdade se torna acessível através de /simpsons/homer .*/