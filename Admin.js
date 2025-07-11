// classe admin
import User from "./User.js";

export default class Admin extends  User {
    constructor (nome, email, nascimento, role = "admin", ativo = "true") {
        super(nome, email, nascimento, role, ativo); //superclasse - esses parametros estão definidos na superclasse de Admin, no caso User
    }

    exibeInfos () {
        const infos = super.exibeInfos();
        return `admin - ${infos}`;
    }

    criarCurso (nomeCurso, qtdVagas) {
        return `nome: ${nomeCurso}, criado com ${qtdVagas} vagas`;
    }

}

const novoAdmin = new Admin('Juliana', 'j@j.com', '2024-01-01');
console.log(novoAdmin.criarCurso('Javascript', 60));

