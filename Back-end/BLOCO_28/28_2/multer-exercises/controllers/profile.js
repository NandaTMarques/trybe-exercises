const fs = require('fs');
/* Vamos ler as informações do arquivo profile.json , vamos adicionar o novo profile dentro, e logo após vamos salvar. Para facilitar a vida vou criar duas funções, getProfileData e saveProfileData . Não esqueça de importar o modulo fs para trabalhar com arquivos. */

const FILE_PATH = `${__dirname}/../profiles.json`;

const getProfileData = () => {
    const fileText = fs.readFileSync(FILE_PATH);
    return JSON.parse(fileText);
};

const saveProfileData = (profiles) => {
    fs.writeFileSync(FILE_PATH, JSON.stringify(profiles));
};

/* Primeiro passo é criar o objeto que iremos salvar no json. Para obter os outros dados que vem pelo form data, basta acessar pelo req.body e as informações do arquivo pelo req.file . */
// Agora vamos montar o perfil e salvar no arquivo
const profile = (req, res) => {
  const { name, email, passoword, bio } = req.body;

  const profileDate = {
      id: req.file.filename,
      name,
      email,
      passoword,
      bio,
  };

  const profiles = getProfileData();
  profiles.push(profileDate);
  saveProfileData(profiles);
  return res.send({ profileDate });
};

const getProfile = (req, res) => {
  const profileId = req.params.id;
  const profiles = getProfileData();

  const profileResult = profiles.find((prof) => prof.id === profileId);

    if (profileResult) return res.send(profileResult);

    return res.status(404).send({ error: { message: 'Perfil não encontrado' } });
};

module.exports = { profile, getProfile };
