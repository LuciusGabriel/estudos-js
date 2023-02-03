// const li = document.querySelectorAll('li')
// console.log(li)
// console.log(Array.isArray(li))
// console.log(Array.from(li))


// console.log(Array.of(10, 20, 30))


// EXERCÍCIOS

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável

let primeiraComida = comidas.slice(0,1)
console.log(primeiraComida)

// Remova o último valor de comidas e coloque em uma variável

let ultimaComida = comidas.slice(-1)
console.log(ultimaComida)

// Adicione 'Arroz' ao final da array

comidas.push('Arroz')
console.log(comidas)

// Adicione 'Peixe' e 'Batata' ao início da array

comidas.unshift('Peixe', 'Batata')

console.log(comidas)



const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética

console.log(estudantes.slice().sort())

// Inverta a ordem dos estudantes
console.log(estudantes.reverse())

// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana'))

// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'))


let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join

html = html.split('section').join('ul').split('div').join('li')

console.log(html)



let carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

let carrosOriginal = carros.slice()
console.log(carrosOriginal)

carros.pop()
console.log(carros)







// Exercícios Complementares Gerados pelo ChatGPT

// 1. Crie um array com cinco elementos e exiba cada um no console.
let novaArray = ['0', '1', '2', '3', '4']
console.log(novaArray)

for(i=0; i<novaArray.length; i++){
  console.log(novaArray[i])
}

// 2. Adicione mais três elementos ao array criado no exercício 1 e exiba o array completo no console.
let outraArray = novaArray.slice()
console.log(outraArray)

outraArray.push('5', '6', '7')
console.log(outraArray)

// 3. Remova o último elemento do array do exercício 2 e exiba o array atualizado no console.
outraArray.pop()
console.log(outraArray)

// 4. Adicione um novo elemento ao início do array do exercício 3 e exiba o array atualizado no console.
outraArray.unshift('-1')
console.log(outraArray)

for(i=0; i<outraArray.length; i++){
  console.log(outraArray[i])
}

// 5. Crie um novo array com três elementos e concatene-o com o array do exercício 4 para criar um novo array. 
// Exiba o novo array no console.
let novaArray3 = ['8', '9', '10']

let arrayConcatenada = outraArray.concat(novaArray3)
console.log(arrayConcatenada)

// 6. Encontre o segundo menor elemento do novo array do exercício 5 e exiba-o no console.
let arrayDesordenado = [5, 8, 6, 1, 10]

let arrayOrdenado = arrayDesordenado.sort((a, b)=>{
  return a - b
})

let segundoMenorValor = arrayOrdenado[1]

console.log(arrayOrdenado)
console.log(segundoMenorValor)

// 7. Crie uma função que receba um array como argumento e retorne o array inverso. 
// Teste sua função com o novo array do exercício 5.
function inverteArray(array){
  let arrayInvertida = array.slice()
  arrayInvertida.reverse()
  console.log(arrayInvertida)
}

inverteArray(arrayConcatenada)

// 8. Crie uma função que receba dois arrays como argumentos e retorne um array com todos os elementos dos dois arrays. 
// Teste sua função com o novo array do exercício 5 e outro array de sua escolha.


let arrayParaConcatenar = ['100', '200', '300']

function concatenaArrays(array1, array2){
  let novaArray = array1.concat(array2)
    console.log(novaArray)
}

concatenaArrays(arrayConcatenada, arrayParaConcatenar)