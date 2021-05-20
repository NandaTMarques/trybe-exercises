/* No código acima temos um middleware que, ao receber uma request, verifica 
se essa request contém um header chamado authorization , se o valor desse 
eaeder tem pelo menos 12 caracteres, e se o valor é compatível com um determinado regex.*/

const authMiddleware = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: 'missing authorization header' });
  }

  const authorizationHeader = req.headers.authorization;

  const validHeaderRegex = new RegExp('0-9a-z', 'i');

  if (
    authorizationHeader.length < 12 ||
    validHeaderRegex.test(authorizationHeader)
  ) {
    return res.status(401).json({ message: 'invalid authentication token' });
  }

  next();
};

module.exports = authMiddleware;