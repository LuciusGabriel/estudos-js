// Adicione a Classe ativo a todos os itens do menu

let itensMenu = document.querySelectorAll('.menu a')

itensMenu.forEach((item)=>{
    item.classList.add('ativo')
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item)=>{
    item.classList.remove('ativo')
})

itensMenu[0].classList.add('ativo')



// Verifique se as imagens possuem o atributo alt
let image = document.querySelectorAll('img')

image.forEach((item)=>{
    console.log(item.hasAttribute('alt'), item)
})



// Modifique o href do link externo do menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.google.com.br')