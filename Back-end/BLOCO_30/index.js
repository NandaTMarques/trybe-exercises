const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// const booksController = require('./')
app.get('/', (req, res) => {
  res.send("Olá mundo!")
})

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}...`);
});