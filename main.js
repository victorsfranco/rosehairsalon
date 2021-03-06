// Toggle menu by clicking
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// Hide menu by clicking on nav links
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// Making window scroll to element
function scrollToNav(elementId) {
  console.log(elementId)
  const scrollToElement = document.getElementById(elementId)
  window.scrollTo({
    top: scrollToElement.offsetTop - 75,
    behavior: 'smooth'
  })
}

//Change header on scroll

const header = document.querySelector('header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})
