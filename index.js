
import Admin from './Admin.js';
import User from './User.js';
import Docente from './Docente.js';

const novoUser = new User ('Juliana', 'j@j.com', '2024-01-01');
console.log(novoUser.exibeInfos());
const novoAdmin = new Admin('João', 'j@j.com', '2024-02-02');
console.log(novoAdmin.exibeInfos());

const novoDocente = new Docente('Ana', 'a@a.com', '2024-02-02');
console.log(novoDocente.exibeInfos());

const dadosFicticios = User.exibirInfosGenericas('Cassio', 'c@c.com');
console.log(dadosFicticios);
