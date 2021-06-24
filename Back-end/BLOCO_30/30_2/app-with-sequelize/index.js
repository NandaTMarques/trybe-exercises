const express = require('express');
const app = express();

const booksController = require('./controllers/booksController');

app.use(express.json());

app.get('/books', booksController.getAll);
app.get('/book/:id', booksController.getById);
app.post('/book', booksController.createNewBook);
app.post('/book/:id', booksController.updateById);
app.delete('/book/:id', booksController.deleteById);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}!!!`));