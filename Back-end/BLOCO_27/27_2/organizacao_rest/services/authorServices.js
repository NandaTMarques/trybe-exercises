const authorModel = require('../models/AuthorModel');

// Cria uma string com o nome completo do autor

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName, birthday, nationality } = authorData;

  const fullName = [firstName, middleName, lastName]
      .filter((name) => name)
      .join(' ');

  return {
      id,
      firstName,
      middleName,
      lastName,
      birthday,
      nationality,
      name: fullName,
  };
};

// Converte o nome dos campos de snake_case para camelCase

const convertFields = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
  birthday: authorData.birthday,
  nationality: authorData.nationality
});

const isValid = (firstName, middleName, lastName, nationality ) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (!nationality || typeof nationality !== 'string') return false;
  return true;
}

//const getAllWithAuthors = async () => Author.getAll();

const getAllAuthor = async () => {
  const authors = await authorModel.getAllAuthor();
  return authors.map(getNewAuthor);
};

const getAuthorById = async (id) => {
  const author = await authorModel.getAuthorById(id);
  return getNewAuthor(author);
};

const createAuthor = async (firstName, middleName, lastName, birthday, nationality) => {
  const authorValid = isValid(firstName, middleName, lastName, nationality);
  if(!authorValid) return false;

  const { insertedId } = await authorModel.createAuthor(firstName, middleName, lastName, birthday, nationality);
  return getNewAuthor({
    id: insertedId,
        firstName,
        middleName,
        lastName,
        birthday,
        nationality
  });
};

const updateAuthor = async (id, firstName, middleName, lastName, birthday, nationality) => {
  const newAuthor = await authorModel.updateAuthor(id, firstName, middleName, lastName, birthday, nationality);
  
  return getNewAuthor(newAuthor);
};

const deleteAuthor = async (id) => {
  const author = await authorModel.deleteAuthor(id);
  return author;
};



module.exports = {
  getNewAuthor,
  convertFields,
  isValid,
  getAllAuthor,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};

/*
const deleteAuthor = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  return connection().then((db) => 
  ObjectId.isValid(id)
  ? db.collection('authors').deleteOne({ _id: ObjectId(id) })
  : null
  );
};
*/
