const user = {
    nome: 'Sofia', 
    email: 's@s.com', 
    nascimento: '2024-07-28', 
    role: 'estudante', 
    ativo: true, 
    exibirInfos: function () {
        console.log(this.nome, this.email); //palavra-chave (this) - herança de protótipo 
    },
};

//como reaproveitar métodos e propriedades de outra classe -- herança de protótipo
const admin = {
    nome: 'Juliana', 
    email: 'j@j.com', 
    nascimento: '2024-01-01', 
    role: 'admin', 
    ativo: true, 
     criarCursos: function () {
        console.log('Curso criado (teste)'); 
    },
}

// (quem vai pegar as propriedades, de onde as propriedades vem )
Object.setPrototypeOf(admin,user); // admin vai usar como protótipo (como modelo) o objeto user
admin.criarCursos();
admin.exibirInfos(); 
//cadeia de protótipos