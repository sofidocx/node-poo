// classe de Docentes 

import User from "./User.js";

export default class Docente extends  User {
    constructor (nome, email, nascimento, role = "docente", ativo = "true") {
        super(nome, email, nascimento, role, ativo); //superclasse - esses parametros estão definidos na superclasse de Admin, no caso User
    }

    aprovarEstudante (nomeEstudante, curso) {
        return `O estudante ${nomeEstudante}, passou no curso de ${curso}, o responsável pelo curso é ${this.nome} `
    }
}

const novoDocente = new Docente ('Ana','a@a.com', '2023-01-01');
console.log(novoDocente.aprovarEstudante('Sofia', 'Javascript'));

