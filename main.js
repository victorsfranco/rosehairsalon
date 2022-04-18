// DECLARANDO UMA CONSTANTE COM FUNÇÃO:
/*
const pessoa = {
  name: 'victor',
  age: 19,
  falar: function() {
    alert(pessoa.age)
  }
}

pessoa.falar()
*/
// DOM - Document Object Model:


/* Toggle menu by clicking*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

/* Hide menu by clicking on nav links*/
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
  link.addEventListener('click', function() {
    nav.classList.remove('show')
  })
}