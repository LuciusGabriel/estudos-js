// Crie um Objeto com Seus dados Pessoais
// Crie um método que apresente seu nome completo
var dadosPessoais = {
    nome: 'Lucius',
    sobrenome: 'Silva',
    idade: 30,
    nacionalidade: 'Brasileiro',
    nomeCompleto(){
        return `${this.nome} ${this.sobrenome}` // O termo this. faz referência ao próprio objeto, seria o mesmo que dizer
                //dadosPessoais.nome e dadosPessoais.Sobrenome
    }
}
// OUTRA SOLUÇÃO
dadosPessoais.nameComplete = function(){
    return `${this.nome} ${this.sobrenome}`
}

//

// Modifique o valor para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}
carro.preco = 3000

// Crie um objeto de um cachorro que representa um Labrador, preto com 10 anos, que late ao ver um homem

var cachorro = {
    nome: 'Bilu', // São chamados de propriedades do Objeto
    raca: 'Labrador',
    cor: 'Preta',
    idade: 10,
    latir(pessoa){ // Isso é um método, uma ação do Objeto, algo que ele pode fazer.
        if(pessoa === 'homem'){
            return 'Latir'
        }else{
            return 'Nada'
        }
    }
}