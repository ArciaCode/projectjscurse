let h1 = document.querySelector('h1')
let parrafito = document.querySelector('.parrafito')
let parf = document.getElementById('parf')
let input = document.querySelector('input')

h1.innerHTML = 'MegaBlog'
h1.classList.add('title')

parrafito.innerHTML = 'Este es un parrafo creado desde javascript'

parf.innerHTML = 'otro parrafo creado desde js'

console.log(input.value)