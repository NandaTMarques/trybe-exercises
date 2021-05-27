/*2. Rota: /btc/price
Objetivo: Receber uma requisição com um token e verificar se ele está correto. O formato do token deve ser uma string de 12 caracteres contendo letras e números. Caso o formato do token esteja incorreto, devolva o erro como resposta invalid token. . Caso o formato do token esteja correto, faça um fetch em uma API externa de sua preferencia e retorne os dados da API como resposta. (sugestão de API: https://api.coindesk.com/v1/bpi/currentprice/BTC.json ) O token será passado pelo header da seguinte forma: Authorization: asd65asd5sd8*/


/*const api = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';
const axios = require('axios');

module.exports = async (req, res) => {
  const token = req.header.authorization;
  const regex = /[a-z0-9]/gi;
  const isValidToken = regex.test(token);
  if(!isValidToken || token.length !== 12 || typeof token !== 'string') {
    res.status(403).send('invalid token')
  }
  const bitcoin = await axios.get(api);
  console.log(bitcoin);
  res.status(200).json(bitcoin);
}*/





