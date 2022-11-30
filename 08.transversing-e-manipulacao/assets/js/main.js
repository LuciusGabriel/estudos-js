// Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')

const cloneMenu = menu.cloneNode(true)

copy.appendChild(cloneMenu)


// Selecione o primeiro DT da DL de Faq
const primeiroDT = document.querySelector('dt')

// Selecione o DD referente ao Primeiro DT
console.log(primeiroDT.nextElementSibling.innerText)

// Substitua o conteúdo HTML de .faq pelo de .animais

const faq = document.querySelector('.faq')
const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML


