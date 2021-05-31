const bodyParser = require('body-parser');
const express = require('express');
const { authorRouters } = require('./routers'); // não esquecer dos {} senão dá erro de importação
//require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(express.json());

//rotas aqui:

app.use(authorRouters);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});

/* usando .env
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
*/ 
