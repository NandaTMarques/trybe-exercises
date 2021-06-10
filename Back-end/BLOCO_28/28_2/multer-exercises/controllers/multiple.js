const multiple = (req, res) => {
  const uploadedFiles = req.files.map((file) => ({
    file: file.originalname,
    url: `http://localhost:3000/${file.path}`,
}));

return res.send(uploadedFiles);
};
module.exports = multiple;

/* Voltando para o nosso controller, agora temos as informações sobre todos os arquivos no req.files , com essas informações nas mãos, vamos formatar de acordo com a saída pedida. Se quiser saber todas as propriedades que tem em cada arquivo, coloca um console.log(req.files); no controller para ter mais detalhes. */