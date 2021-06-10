const connect = require('./connection');

const registerUser = async (username, password) => {
  const [id] = await connect.execute(
    'INSERT INTO users(username, password) VALUES (?, ?)', [username, password],
  );
  return {
    id: id.insertId,
    username,
  };
};

const findUser = async (username) => {
  const [user] = await connect.execute(
    'SELECT username, password FROM users WHERE username = ?;', [username],
  );
  return user;
};
const getAllUser = async () => {
  const [users] = await connect.execute( // desestruturo pra pegar só o [0] do array
      'SELECT id, username  FROM users;',
  ); 
  return users;
};

module.exports = { registerUser, findUser, getAllUser };
