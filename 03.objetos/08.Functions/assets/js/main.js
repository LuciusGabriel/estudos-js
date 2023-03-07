// Código Aula

const honda = {
    marca: 'Honda',
    ano: 2008,
}

const fiat = {
    marca: 'Fiat',
    ano: 2010,
}

function dadosVeiculo(potencia){
    console.log(`${this.marca} ${this.ano} ${potencia}`)
}

dadosVeiculo.call(honda, '200cv')
dadosVeiculo.call(fiat, '80cv')







// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const p = document.querySelectorAll('p')

console.log(p)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
