const express = require('express');
const data = require('./data.json');
const fs = require('fs');

const app = express();

app.use(express.json()); 
/* colocar sempre que for usar o delete e o post 
(tudo que tem body p definir o formato)*/

/*const log = (err, req, res, next) => {
  res.send({message: {
    error: err.message
  }})
  console.log('log ativo');
  next(err);
}*/

app.get('/', (req, res) => {
  res.send(data)
})

app.get('/:id', (req, res) => {
  const result = data.filter((dataId) => dataId.id === req.params.id);
  res.send(result);
})

app.delete('/:id', async (req, res) => {
  const result = data.filter((dataId) => dataId.id !== req.params.id);
  await fs.promises.writeFile(__dirname + '/data.json', JSON.stringify(result));
  res.status(204);
})

app.post('/', async (req, res) => {
  const size = data.length;
  data[size] = {
    id: req.body.id, name: req.body.name
  }
  await fs.promises.writeFile(__dirname + '/data.json', JSON.stringify(data));
  res.status(201).send({message: 'Salvo com sucesso'});
  //res.status(201).send('Salvo com sucesso');
})

app.use((req, res, next) => {
  console.log('Passou por aqui');
  next();
});

app.put('/:id', async (req, res) => {
  try {
    const result = data.map((dataId) => {
      if(dataId.id === req.params.id) dataId.name = req.body.name;
      return dataId;
    });
    await fs.promises.writeFile(__dirname + '/data.json', JSON.stringify(result));
    res.status(204).send('Salvo com sucesso');   
  } catch (error) {
    throw new Error(error);
  }
})

app.listen(3334, () =>{
  console.log('Servidor iniciado')
})
