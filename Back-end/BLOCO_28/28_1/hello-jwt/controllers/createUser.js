const userModel = require('../models/userModel');

module.exports = async (req, res) => {
  try {
    const username = await userModel.registerUser(
      req.body.username,
      req.body.password,
    );
    if (!username) throw Error;
    res.status(201).json({ message: 'Novo usuário criado com sucesso', user: username });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erro ao salvar o usuário no banco', error: err });
  }
};