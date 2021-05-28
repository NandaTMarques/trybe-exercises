// MySQL

const connection = require('./connection');

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

// Busca todos os autores do banco.

const getAllAuthor = async () => {
    // estou executando algo na minha conexão, execute é uma função do mysql2 que instalei
    const [authors] = await connection.execute( // desestruturo pra pegar só o [0] do array
        'SELECT id, first_name, middle_name, last_name, birthday, nationality FROM model_example.authors;',
    ); 
    return authors.map(convertFields).map(getNewAuthor);
    // return authors[0].map(convertFields).map(getNewAuthor);
};

const  getAuthorById = async (id) => {
    const [authors] = await connection.execute(
        'SELECT id, first_name, middle_name, last_name, birthday, nationality FROM model_example.authors WHERE id = ?;',
        [id] // coloco aqui o que tiver no parametro da query acima, se divesse id = ? AND name = ? coloco name no []
    );
    if (authors.length === 0) return null;
    return authors.map(convertFields).map(getNewAuthor);
};

const isValid = (firstName, middleName, lastName, nationality ) => {
    if (!firstName || typeof firstName !== 'string') return false;
    if (!lastName || typeof lastName !== 'string') return false;
    if (!nationality || typeof nationality !== 'string') return false;
    return true;
}

const createAuthor = async (firstName, middleName, lastName, birthday, nationality) => {
    const [authors] = await connection.execute(
        'INSERT INTO model_example.authors (first_name, middle_name, last_name, birthday, nationality) VALUES (?, ?, ?, ?,?);',
        [firstName, middleName, lastName, birthday, nationality] // coloco aqui o que tiver no parametro da query acima, se divesse id = ? AND name = ? coloco name no []
    ); 
    const result = {
        id: authors.insertId,
        firstName,
        middleName,
        lastName,
        birthday,
        nationality,
    }
    return result//.map(convertFields).map(getNewAuthor);
};

const updateAuthor = async (id, first_name, middle_name, last_name, birthday, nationality) => {
    await connection.execute(
        'UPDATE model_example.authors SET first_name = ?, middle_name = ?, last_name = ?, birthday = ?, nationality = ? WHERE id = ?;',
        [first_name, middle_name, last_name, birthday, nationality, id] // coloco na ordem da query acima
    ); 
    const result = {
        id,
        first_name,
        middle_name,
        last_name,
        birthday,
        nationality,
    }
    return result//.map(convertFields).map(getNewAuthor);
};

const deleteAuthor = async (id) =>
    await connection.execute(
        'DELETE FROM model_example.authors WHERE id = ?',
        [id]
    );


module.exports = {
    getAllAuthor,
    getAuthorById,
    createAuthor,
    updateAuthor,
    deleteAuthor,
    isValid,
};

// MongoDB

/*const connection = require('./connection');

// Cria uma string com o nome completo do autor

const getNewAuthor = (authorData) => {
const { id, firstName, middleName, lastName } = authorData;

const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
};
};

// Converte o nome dos campos de snake_case para camelCase

const convertFields = (authorData) => ({
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name});

// Busca todos os autores do banco.

const getAll = async () => {
    return connection()
        .then((db) => db.collection('authors').find().toArray())
            .then((authors) =>
                authors.map(({ _id, firstName, middleName, lastName }) =>   
                getNewAuthor({
                    id: _id,
                    firstName,
                    middleName,
                    lastName,
                })
            )
        );
}*/

/*MongoDB não nos devolve um Array de colunas como o MySQL , e sim um objeto para cada documento encontrado.*/
