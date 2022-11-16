// Nomeie 3 propriedades ou métodos de Strings
var nome = 'Lucius'
console.log(`A String ${nome} tem ${nome.length} caracteres`) //.length é uma PROPRIDADE responsável por contar quantos caracteres tem uma string

console.log(nome.slice(3)) // MÉTODO responsável por cortar strings sendo o parâmetro a quantidade de caracteres a serem cortadas

console.log(nome.replace('cius', 'dacris')) // MÉTODO que substitui um conjunto de caracteres

// Nomeie 5 Propriedades ou Métodos de Elemento DOM
var paragrafo = document.querySelector('.paragrafo')
var body = document.querySelector('body')

paragrafo.insertAdjacentHTML('afterbegin', 'O <strong>PODER</strong> do JavaScript é incrível quando aprendemos a manipulá-lo')
paragrafo.addEventListener('mouseover', function(){
    body.style.backgroundColor = "#000"
})
paragrafo.addEventListener('mouseout', function(){
    body.style.backgroundColor = ""
})