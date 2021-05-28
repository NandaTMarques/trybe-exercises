const express = require('express');
const authorModel = require('../models/AuthorModel');

const router = express.Router();

//rotas aqui:

router.get('/', async (_req, res) => {  // lembrar sempre do async/await
  try {
    const authors = await authorModel.getAllAuthor();
    res.status(200).json(authors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Deu ruim!'})
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const authors = await authorModel.getAuthorById(id);
    if (!authors) return res.status(404).json({ message: 'autor inexistente'})
    return res.status(200).json(authors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Deu ruim!'})
  }
});

router.post('/', async (req, res) => {
  try {
    const { first_name, middle_name, last_name, birthday, nationality } = req.body
    if (!authorModel.isValid(first_name, middle_name, last_name, nationality)) {
      return res.status(400).json({ messagem: 'Dados Inválidos!'})
    }
    const authors = await authorModel.createAuthor(first_name, middle_name, last_name, birthday, nationality);
    res.status(201).json(authors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Deu ruim!'})
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { first_name, middle_name, last_name, birthday, nationality } = req.body
    const { id } = req.params;
    const authors = await authorModel.updateAuthor(id, first_name, middle_name, last_name, birthday, nationality);
    res.status(200).json(authors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Deu ruim!'})
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await authorModel.deleteAuthor(id);
    res.status(200).json({message: 'Deletado com sucesso'});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Não foi possivel deletar o autor!'})
  }
});

module.exports = router;
