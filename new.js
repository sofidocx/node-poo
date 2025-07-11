//fazendo testes em "funções construtoras"

function User (nome, email) {
    this.nome = nome; 
    this.email = email;  //this.nome = estou atribuindo um contexto do this(no caso nome) para um valor, que está vindo do parametro 

    this.exibirInfos = function () {
        return `${this.nome}, ${this.email}`
    }
}

const novoUser = new User('Sofia', 's@s.com'); 
console.log(novoUser.exibirInfos());
 