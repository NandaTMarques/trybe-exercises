// index.js
const express = require('express');
const simpsons = require('./simpsons')

/* Todas as rotas com /simpsons/<alguma-coisa> entram aqui e vão para o roteador. */
app.use('/simpsons', simpsons);

app.listen(3334);

const authRouter = require('./authRouter');

app.use('/secure', authRouter);

/* GET /hello */
app.get('/hello', (req, res) => {
  res.status(200).json({ message: 'Hello world, with no auth!' });
});


/* index.js  ERRO */
//const express = require('express');
const rescue = require('express-rescue');
const errorMiddleware = require('./errorMiddleware');

const app = express();

app.get('/products/:id', [
  rescue(async (req, res) => {
    const productId = req.params.id;

    const product = await database.getProductById(id);

    res.status(200).json(product);
  }),
  (err, req, res, next) => {
    if (err.message === 'Produto não encontrado') {
      const newError = new Error(err.message);
      newError.code = 'product_not_found';
      newError.status = 404;
      return next(newError);
    }

    return next(err);
  }
]);

app.use(errorMiddleware);

/*O middleware acima verifica se o erro possui um código e um status HTTP . Caso possua, o código e a mensagem são devolvidas na response. Caso contrário um erro genérico de servidor é utilzado.*/