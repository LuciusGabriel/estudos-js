// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];

  let totalTaxas = 0;
  transacoes.forEach((item)=>{
    let valorTratado = +item.valor.replace('R$', '')

    if(item.descricao.slice(0, 4) === 'Taxa'){
        totalTaxas += valorTratado
    }
})
console.log(totalTaxas)






  
  // Retorne uma array com a lista abaixo
  const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

  let transporte = transportes.split(';')
 
  console.log(transporte)


  

  // Substitua todos os span's por a's
  let html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;

  let novoHTML = html.split('span')
console.log(novoHTML)
  console.log(novoHTML = novoHTML.join('a'))

//O Código poderia ser descrito da seguinte forma também html.split('span').join('a') 


  // Retorne o último caracter da frase
  const frase = 'Melhor do ano!';

let ultimoCaracter = frase.slice(-1)
let ultimoCaractere = frase[frase.length - 1]
console.log(ultimoCaracter, ultimoCaractere)

  
  // Retorne o total de taxas
  const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];  

let totalTaxa = 0

  transacoes2.forEach((item)=>{
    item = item.toLowerCase()
    item = item.trim()
    item = item.slice(0, 4)
    // Melhor declaração seria item = item.toLowerCase().trim().slice(0, 4)
    if(item === 'taxa'){
        totalTaxa++
    }

  })
console.log(totalTaxa)