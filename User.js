// classe User básico
 
export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true){
        this.#nome = nome; 
        this.#email = email; 
        this.#nascimento = nascimento; 
        this.#role = role || "estudante";
        this.#ativo = ativo;
    }

    get nome() { //cria um tipo especial de método que é somente leitura 
        return this.#nome; //método acessor, que dá acesso a uma propriedade fora dela 
    }

    get email() { 
        return this.#email; 
    }

    get nascimento() { 
        return this.#nascimento; 
    }

    get role() { 
        return this.#role; 
    }

    get ativo() { 
        return this.#ativo; 
    }

    set nome (novoNome) {
        if(novoNome === '') {
            throw new Error ('Formato do nome não é válido'); 
        }
        this.#nome = novoNome;
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
