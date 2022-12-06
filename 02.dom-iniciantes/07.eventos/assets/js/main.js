// Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. Previna o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]')

function mudaClasse(event){
    event.preventDefault();
    // Remover a class ativo -->
    linksInternos.forEach((link)=>{
        link.classList.remove('ativo')
    })

    // Como adicionar a Classe Ativo?
    event.currentTarget.classList.add('ativo')
}

linksInternos.forEach((link)=>{
    link.addEventListener('click', mudaClasse)
})



// Selecione todo os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados
const body = document.body;

function scan(event){
    console.log(event.path[0])
}

body.addEventListener('click', scan)


// Utilizando o código anterior, ao invés de mostrar no console, remova o elemento que está sendo clicado, o método remove() remove um elemento

// function exclude(event){
//     let clicado = event.path[0];
//     clicado.remove();
// }

// body.addEventListener('click', exclude)


// Se o usuário clicar na tecla (T), aumente todo o texto do site

function apertaT(event){
    if(event.key === 't'){
        document.documentElement.classList.toggle('texto-maior')
    }
}

window.addEventListener('keydown', apertaT)