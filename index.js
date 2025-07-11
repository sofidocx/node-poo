
import Admin from './Admin.js';
import User from './User.js';
import Docente from './Docente.js';

const novoUser = new User ('Juliana', 'j@j.com', '2024-01-01');
console.log(novoUser.exibeInfos());

const novoAdmin = new Admin('João', 'j@j.com', '2024-02-02');
console.log(novoAdmin.exibeInfos());
console.log(novoAdmin.nome);

novoUser.nome = 'Julia'; 
console.log(novoUser.nome);

