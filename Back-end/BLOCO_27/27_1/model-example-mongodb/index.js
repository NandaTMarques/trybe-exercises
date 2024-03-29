const bodyParser = require('body-parser');
const express = require('express');
const authorRoute = require('./routers/authorRouter');
const errorMiddleware = require('../controllers/errorController');

const app = express();

app.use(bodyParser.json());
app.use(express.json());

//rotas aqui:

app.use('/authors', authorRoute);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
