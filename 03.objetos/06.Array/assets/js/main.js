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