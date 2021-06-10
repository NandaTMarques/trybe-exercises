const userModel = require('../models/userModel');

module.exports = async (req, res) => {
  try {
    const username = await userModel.getAllUser(
      req.body.id,
      req.body.username,
    );
    if (!username) throw Error;
    res.status(201).json(username);
  } catch (err) {
    res.status(500).json({ message: 'Deu ruim!' });
  }
};
