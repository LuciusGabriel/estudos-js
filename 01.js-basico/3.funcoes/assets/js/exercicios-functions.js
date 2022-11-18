"use strict"

//Função que Retorna Truthy
function valueTrue(number){
    if(number >= 0){
        return true
    }else{
        return false
    }
}
//Outra solução possível
function isTruthy(dado){
    return !!dado // Quando se coloca !! já faz a comparação se é True or False
    // O retorno sempre será true caso haja um dado, caso seja string vazia ou semelhante
    // retornará False
}
//

//Crie uma função matemática que retorne o perímetro de um quadrado
//Lembrando: Perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado){
    return lado * 4
}

// Crie uma função que retorne o seu nome completo
function nameComplete(firstName, lastName){
    const name = `${firstName} ${lastName}`
    return name
}

// Crie uma função que verifica se um número é par
function evenNumber(number){
    const even = number%2
    if(even == 0){
        return 'O número é par'
    }else{
        return 'O número é ímpar'
    }
}

// Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)
function typeArg(parameter){
    const type = typeof(parameter)
    return type
}

// Criar uma função que exibe seu nome completo ao evento de 'scroll'
// document.addEventListener('scroll', ()=>{
//     console.log('Lucius Silva')
// })
