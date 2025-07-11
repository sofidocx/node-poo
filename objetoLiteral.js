const user = {
    nome: 'Sofia', 
    email: 's@s.com', 
    nascimento: '2024-07-28', 
    role: 'estudante', 
    ativo: true, 
    exibirInfos: function () {
        console.log(this.nome, this.email); //palavra-chave (this) - herança de protótipo 
    }
}

user.exibirInfos(); 

//const exibir = user.exibirInfos; --> ela perdeu o contexto, por isso imprime undefined
//exibir();

const exibir = function () {
    console.log(this.nome, this.email);
}

const exibirNomeEEmail = exibir.bind(user);// --> prender ou ligar duas coisas, vou prender a const exibir ao objeto user 
exibirNomeEEmail(); 
