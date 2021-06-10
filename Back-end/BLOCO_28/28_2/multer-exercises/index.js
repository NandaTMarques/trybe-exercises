require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');
const multer = require('multer'); // MULTER
const { resolve } = require('path'); 

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static(`${__dirname}/uploads`)); // MULTER pra eu poder ver os arquivos no caminho da pasta onde guardo as imagens de upload
// No seu index.js , use a configuração do express.statatic na pasta uploads
app.use(express.static(resolve(__dirname, 'uploads')));

const storage = multer.diskStorage({ // MULTER
  destination: (req, file, callback) => { callback(null, 'uploads'); }, // pasta onde vou salvar
  filename: (req, file, callback) => { callback(null, `${Date.now()}-${file.originalname}`); },
  /* O arquivo armazenado deve ter o timestamp do upload (obtido com Date.now() ) seguido do nome original do arquivo.
  Exemplo, para o arquivo profile.png , o nome armazenado deve ser algo como 1616691266095-profile.png , já que o timestamp será diferente a cada vez. */
});

const upload = multer({ storage }); // MULTER

const defaultStorage = multer.diskStorage({
  destination: (req, file, callback) => { callback(null, 'uploads'); } }); // MULTER MULTIPLE

const multiUpload = multer({ storage: defaultStorage }); // MULTER MULTIPLE

app.get('/ping', controllers.ping);
app.post('/upload', upload.single('file'), controllers.upload); // MULTER 
// O endpoint deve receber apenas um arquivo no campo file - single('file') 
app.post('/multiple', multiUpload.array('files'), controllers.multiple); // MULTER MULTIPLE
//
app.post('/profile', multer({ dest: 'profilePics' }).single('profilePic'), controllers.profile);
app.get('/profiles/:id', controllers.getProfile);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
