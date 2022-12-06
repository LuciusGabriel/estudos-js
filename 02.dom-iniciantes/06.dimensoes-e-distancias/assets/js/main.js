// Verifique a distância da primeira imagem em relação ao topo da página
const img = document.querySelector('img');
console.log(img.offsetTop)
console.log('---------------')


// Retorne a soma da largura de todas as imagens
const imgs = document.querySelectorAll('img');
let soma = 0;

imgs.forEach((item)=>{
    soma += item.offsetWidth;
})

console.log(soma)


// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo (48px/48px de acordo com o Google)
const links = document.querySelectorAll('.menu a')
links.forEach((item, index)=>{
    let rect = item.getBoundingClientRect()
    let height = rect.height
    let width = rect.width
    if(height >= 48 && width >= 48){
        console.log('Está dentro do Recomendado')
    }else{
        console.log(`O link ${item} Não está dentro do recomendado`)
    }
})


// Se o Browser for menor que 720px adicione a classe menu-mobile ao menu
const menu = document.querySelector('.menu')
const tamanhoBrowser = window.innerWidth
if(tamanhoBrowser < 720){
    menu.classList.add('menu-mobile')
}else{
    menu.classList.remove('menu-mobile')
}

console.log(tamanhoBrowser)