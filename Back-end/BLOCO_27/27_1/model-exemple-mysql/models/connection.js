const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'model_example'});

module.exports = connection;

// MongoDB

// conexão local com o mongodb e tabela

/*const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const connection = () =>
    MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => conn.db('sales'))
    .catch((err) => console.error(err) && process.exit(1));

module.exports = connection;*/

/*USANDO PROMISE
const { MongoClient } = require('mongodb');

const OPTIONS = {
    useNewUrlParser: true,  //interpretar a URL de conexão ao banco
    useUnifiedTopology: true, //para o driver do mongodb que queremos utilizar essa nova forma de conexão 
}

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

let db = null;

const connection = () => {
    return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
    db = conn.db('model_example'); // mudo o banco de dados aqui 
    return db;
    })
};

module.exports = connection;*/
