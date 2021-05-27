const express = require('express');

const { loginMiddleware, priceMiddleware } = require('./middlewares');

const app = express();
const PORT = 8080;
app.use(express.json());

app.post('/login', loginMiddleware)

//app.get('/btc/price', priceMiddleware);

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));

