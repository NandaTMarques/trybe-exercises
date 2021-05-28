const connection = require('./connection');
const { ObjectId, ObjectID } = require('mongodb'); // usado para validar os ids, uso em buscas ou inserçoes;

//MongoDB não nos devolve um Array de colunas como o MySQL , e sim um objeto para cada documento encontrado.

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
    return connection()
        .then((db) => db.collection('authors').find().toArray()) // db retorna uma promise, trato com then
            .then((authors) => {
                return authors.map(({ _id, firstName, middleName, lastName, birthday, nationality, }) => {
                    return getNewAuthor({
                        id: _id,
                        firstName,
                        middleName,
                        lastName,
                        birthday,
                        nationality,
                    })
                });
            })
}

const  getAuthorById = async (id) => {
    const authors = await connection()
    .then((db) =>  db.collection('authors').findOne(ObjectId(id)))

    if (!authors) return null;
    if (!ObjectId.isValid(id)) return null;

    const { firstName, middleName, lastName, birthday, nationality } = authors;
    
    const result = {
        id,
        firstName,
        middleName,
        lastName,
        birthday,
        nationality,
    };

    return getNewAuthor(result);
}

const isValid = (firstName, middleName, lastName, nationality ) => {
    if (!firstName || typeof firstName !== 'string') return false;
    if (!lastName || typeof lastName !== 'string') return false;
    if (!nationality || typeof nationality !== 'string') return false;
    return true;
}

const createAuthor = async (firstName, middleName, lastName, birthday, nationality) => {
    const authors = await connection()
    .then((db) => db.collection('authors')
    .insertOne({ firstName, middleName, lastName, birthday, nationality }))
    .then(result => result.ops[0]);

    const response = getNewAuthor({ 
        id: authors.insertedId,
        firstName,
        middleName,
        lastName,
        birthday,
        nationality
    })
    return response;
};


const updateAuthor =async (id, firstName, middleName, lastName, birthday, nationality) => {
    if (!ObjectId.isValid(id)) return null;

    const authors = await connection()
    .then((db) => db.collection('authors')
    .updateOne(
        { _id: ObjectID(id) },
        {$set: { firstName, middleName, lastName, birthday, nationality }}))
    .then(() => ({ _id: id, firstName, middleName, lastName, birthday, nationality }));

    const response = getNewAuthor({ 
        id: authors.insertedId,
        firstName,
        middleName,
        lastName,
        birthday,
        nationality
    })
    return response;
};

const deleteAuthor = async (id) => {
    if (!ObjectId.isValid(id)) return null;

    return connection().then((db) => 
    ObjectId.isValid(id)
    ? db.collection('authors').deleteOne({ _id: ObjectId(id) })
    : null
    );
};


module.exports = {
    getAllAuthor,
    getAuthorById,
    createAuthor,
    updateAuthor,
    deleteAuthor,
    isValid,
};

/* OUTRA FORMA DE FAZER O GETBYID:

const  getAuthorById = async (id) => {
    const authors = await connection()
    .then((db) =>  
        ObjectId.isValid(id)
            ? db.collection('authors').findOne(ObjectId(id))
            : null
    );

    const { firstName, middleName, lastName, birthday, nationality } = authors;
    
    const result = {
        id,
        firstName,
        middleName,
        lastName,
        birthday,
        nationality,
    };

    return getNewAuthor(result);
}
*/