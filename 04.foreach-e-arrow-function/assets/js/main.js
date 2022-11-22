// const imgs = document.querySelectorAll('img')

// imgs.forEach(function(item, index, array){
//     // console.log(item, index, array)
// })


// Quando o que é retornado é uma HTMLCollection (não é uma array) é necessário converter para Array para que possa ter acesso aos métodos inerentes à arrays
// como demonstrado a seguir
const titulos = document.getElementsByClassName('titulo');
console.log(titulos)
// Retorna um HTMLCollection
const titulosArray = Array.from(titulos);
// Converte o HTMLCollection em Array e é possível acessar seus métodos

titulosArray.forEach(function(item){
    // console.log(item)
})


// const imgs = document.querySelectorAll('img')

// imgs.forEach((item, index)=>{
// console.log(item, index)
// })

// EXERCÍCIOS

// Mostre no console cada parágrafo do site
const paragrafos = document.querySelectorAll('p')

paragrafos.forEach((item)=>{
    console.log(item)
})


// Mostre o texto dos parágrafos no console
paragrafos.forEach((item)=>{
    console.log(item.innerText)
})

// Como corrigir os erros abaixo
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) =>{
    console.log(item,index);
})

let i = 0;
imgs.forEach(()=>{
    console.log(i++);
});

imgs.forEach(()=>i++);