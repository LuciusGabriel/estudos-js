// Transforme o objeto abaixo em uma Construtor Function
const pessoa ={
    nome: 'Nome pessoa',
    idade: 0,
    andar(){
        console.log(this.nome + 'andou');
    }
}

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function(){
        console.log(this.nome + ' andou');
    }
}

// Crie 3 Pessoas, João - 20 Anos
// Maria - 25 Anos, Bruno - 15 Anos

const joao = new Pessoa('João', 20)
const maria = new Pessoa('Maria', 25)
const bruno = new Pessoa('Bruno', 15)

// Crie uma Constructor Function (DOM) para manipulação de listas de elementos do DOM. Deve conter as seguintes propriedades e métodos:
// elements, retorna NodeList com os elementos selecionados.
// addClass(classe), adiciona a classe a todos os elementos removeClass(classe), remove a classe a todos os elementos

function Dom(seletor){
    this.elements = document.querySelectorAll(seletor)
    this.ativar = function(classe){
        this.elements.forEach((item)=>{
            item.classList.add(classe)
        }) 
    }
    this.desativar = function(classe){
        this.elements.forEach((item)=>{
            item.classList.remove(classe)
        }) 
    }
}

const li = new Dom('li')
