const fs = require('fs');

function leArquivo(nomeDoArquivo) {
  try {
    //const conteudoDoArquivo = console.log(fs.readFileSync(nomeDoArquivo, 'utf8'));
    const conteudoDoArquivo = fs.readFileSync(nomeDoArquivo, 'utf8');
    
    return conteudoDoArquivo;
  } catch (err) {
    return null;
  }
}
// leArquivo("pequenoPrincipe.txt");
module.exports = leArquivo;