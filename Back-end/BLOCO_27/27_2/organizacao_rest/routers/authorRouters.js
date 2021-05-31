const express = require('express');
const authorModel = require('../models/AuthorModel');
const authorControllers = require('../controllers/AuthorControllers');

const router = express.Router();

//rotas aqui:

router.get('/authors', authorControllers.getAllAuthor);
router.get('/authors/:id', authorControllers.getAuthorById);
router.post('/authors', authorControllers.createAuthor);
router.put('/authors/:id', authorControllers.updateAuthor);
router.delete('/authors/:id', authorControllers.deleteAuthor);

module.exports = router;
