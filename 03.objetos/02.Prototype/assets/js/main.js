// Cria uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método do protótipo que retorne
// o nome completo da pessoa

function Pessoas(nome, sobrenome, idade){
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
}

Pessoas.prototype.nomeCompleto = function(){
    // this.nomeCompleto = this.nome + this.sobrenome
    // return this.nomeCompleto --> COMO EU FIZ
    // Melhor Prática ↓↓↓↓
    return `${this.nome} ${this.sobrenome}`
}

const lucius = new Pessoas('Lucius', 'Silva', 30)


// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

// Forma de acessar... ↓↓↓
console.log(Object.getOwnPropertyNames(NodeList.prototype))
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype))
console.log(Object.getOwnPropertyNames(Document.prototype))





// Liste os construtores dos dados abaixo
const li = document.querySelectorAll('li')

li;
li.click;
li.innerText;
li.value;
li.hidden;
li.offsetLeft;
li.click();

// Qual o construtor do dado abaixo
li.hidden.constructor.name
