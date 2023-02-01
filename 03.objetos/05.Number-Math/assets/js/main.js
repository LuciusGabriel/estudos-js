// Retorne um número aleatório
// entre 1050 e 2000

let min = 1050
let max = 2000

let aleatorio = Math.floor(Math.random() * (max - min + 1) + min)
console.log(aleatorio)



// Retorne o maior número da lista abaixo
let numeros = '4, 5, 20, 8, 9';

let arrayNumeros = numeros.split(', ')
console.log(Math.max(...arrayNumeros))





// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
let listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

function limpaPreco(preco){
  preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.')
  preco = +preco.toFixed(2)
  return preco
}

let soma = 0;
listaPrecos.forEach((item)=>{
  soma += limpaPreco(item);
})

console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))



