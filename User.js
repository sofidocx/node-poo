// classe User básico 
export default class User {
    constructor(nome, email, nascimento, role, ativo = true){
        this.nome = nome; 
        this.email = email; 
        this.nascimento = nascimento; 
        this.role = role || "estudante";
        this.ativo = ativo;
    }

    exibeInfos() {
        return `${this.nome}, ${this.email}`;
    }

}

const novoUser = new User ('Sofia', 's@s.com', '2024-07-28'); 
console.log(novoUser);
console.log(novoUser.exibeInfos()); 

//console.log(User.prototype.isPrototypeOf(novoUser)); // console: true, user é uma classe, mas internamente, ela é um protótipo
// novoUser é protótipo da nossa classe User? sim.
