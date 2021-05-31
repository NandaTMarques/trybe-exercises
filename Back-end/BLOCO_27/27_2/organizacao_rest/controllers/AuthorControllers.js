const authorModel = require('../models/AuthorModel');
const authorServices = require('../services/authorServices');

const getAllAuthor = async (_req, res) => {  // lembrar sempre do async/await
  try {
    const authors = await authorServices.getAllAuthor();
    res.status(200).json(authors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Deu ruim!'})
  }
};

const getAuthorById = async (req, res) => {
  try {
    const { id } = req.params
    const authors = await authorServices.getAuthorById(id);
    if (!authors) return res.status(404).json({ message: 'autor inexistente'})
    return res.status(200).json(authors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Deu ruim!'})
  }
};

const createAuthor =  async (req, res) => {
  try {
    const { first_name, middle_name, last_name, birthday, nationality } = req.body
    const newAuthor = await authorServices.createAuthor(first_name, middle_name, last_name, birthday, nationality);

    if (!newAuthor) return res.status(400).json({ messagem: 'Dados Inválidos!'});
    res.status(201).json({message: 'Autor adicionado com sucesso!'});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Deu ruim!'})
  }
};

const updateAuthor = async (req, res) => {
  try {
    const { first_name, middle_name, last_name, birthday, nationality } = req.body
    const { id } = req.params;
    const authors = await authorServices.updateAuthor(id, first_name, middle_name, last_name, birthday, nationality);
    res.status(200).json(authors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Deu ruim!'})
  }
};

const deleteAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    await authorServices.deleteAuthor(id);
    res.status(200).json({message: 'Deletado com sucesso'});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Não foi possivel deletar o autor!'})
  }
};

module.exports = {
  getAllAuthor,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor
}