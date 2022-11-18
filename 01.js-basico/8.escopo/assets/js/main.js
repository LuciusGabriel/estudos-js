// Por qual motivo o código abaixo retorna com erros?
{
    var cor ='preto';
    const marca='Fiat';
    let portas = 4;
}
// console.log(var, marca, portas)

// R: A var não é possível ser chamada com o nome var, é necessário o nome da variável, bem como Const e o Let não extrapolam o escopo do bloco

// Como corrigir o erro abaixo? // Mudando o escopo de const, retirando de dentro da função, para que possar ser reaproveitado
const dois = 2
function somarDois(x){    
    return x + dois;
}
function dividirDois(x){
    return x / dois;
}
console.log(somarDois(4))
console.log(dividirDois(4))


// O que fazer para total retornar 500?
var numero = 50

for(let numero = 00; numero < 10; numero++){ //Basta que a variável seja Let, pois esta não vaza o escopo do loop For
    console.log(numero)
}

const total = 10 * numero;
console.log(total)