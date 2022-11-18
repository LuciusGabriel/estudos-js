// Crie uma Array com os anos que o Brasil ganhou a Copa
var ganhouCopa = [1959, 1962, 1970, 1994, 2002]

// Intereja com o array utilizando um loop, para mostrar no console a seguinte mensagem
// O Brasil ganhou a copa de ${ano}

ganhouCopa.forEach(function(ano){
    console.log(`O Brasil ganhou a copa de ${ano}`)
})

// Intereja com o Array de Frutas abaixo e pare quando chegar em Pera
var frutas = ['Banana', 'Maça', 'Pera', 'Uva', 'Melancia']

for(i=0; i<frutas.length; i++){
    console.log(frutas[i])
    if(frutas[i] === 'Pera'){
        break
    }
}

console.log('-------------------')

// Coloque a Última fruta da Array acima em uma variável sem remover da Array

var ultimaFruta = frutas.at(-1)
// OUTRA SOLUÇÃO
var ultimaFrutaa = frutas[frutas.length - 1]

console.log(ultimaFruta)
console.log(ultimaFrutaa)