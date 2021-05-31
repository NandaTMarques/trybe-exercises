const connection = require('../config/connection');
const { ObjectId, ObjectID } = require('mongodb'); // usado para validar os ids, uso em buscas ou inserçoes;

//MongoDB não nos devolve um Array de colunas como o MySQL , e sim um objeto para cada documento encontrado.



// Busca todos os autores do banco.

const getAllAuthor = async () => {
    return connection()
        .then((db) => db.collection('authors').find().toArray()) // db retorna uma promise, trato com then e transformo em um array (vem objeto do find)
            .then((authors) => {
                return authors.map(({ _id, firstName, middleName, lastName, birthday, nationality, }) => {
                    return {
                        id: _id,
                        firstName,
                        middleName,
                        lastName,
                        birthday,
                        nationality,
                    }
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

    return result;
}

/*const findByName = async (firstName, middleName, lastName) => {
    // Determinamos se devemos buscar com ou sem o nome do meio
    const query = middleName
        ? { firstName, middleName, lastName }
        : { firstName, lastName };

    // Executamos a consulta e retornamos o resultado
    const author = await connection()
        .then((db) => db.collection('authors').findOne(query));

    // Caso nenhum author seja encontrado, devolvemos null
    if (!author) return null;

    // Caso contrário, retornamos o author encontrado
    return getNewAuthor(author);
};*/



const createAuthor = async (firstName, middleName, lastName, birthday, nationality) => {
    const authors = await connection()
    .then((db) => db.collection('authors')
    .insertOne({ firstName, middleName, lastName, birthday, nationality }))
    .then(result => result.ops[0]);

    const response = { 
        id: authors.insertedId,
        firstName,
        middleName,
        lastName,
        birthday,
        nationality
    }
    return response;
};


const updateAuthor =async (id, firstName, middleName, lastName, birthday, nationality) => {
    if (!ObjectId.isValid(id)) return null;

    const author = await connection()
    .then((db) => db.collection('authors')
    .updateOne(
        { _id: ObjectID(id) },
        {$set: { firstName, middleName, lastName, birthday, nationality }}))
    .then(() => ({ _id: id, firstName, middleName, lastName, birthday, nationality }));

    const response = { 
        id: author.insertedId,
        firstName,
        middleName,
        lastName,
        birthday,
        nationality
    }
    // return author; somente
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
    //findByName,
    createAuthor,
    updateAuthor,
    deleteAuthor,
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