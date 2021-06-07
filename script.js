var navMenuBangsat = document.getElementById('nav')
var hamburger = document.getElementById('hamburger')
var navLink = document.querySelectorAll('.nav-link')

console.log(hamburger)
console.log(navMenuBangsat)

hamburger.addEventListener('click', function () {
    console.log('dipencet')
    navMenuBangsat.classList.toggle('active')
})

function ilangin() {
    navMenuBangsat.classList.remove('active')
}

navLink.forEach(link => link.addEventListener('click', ilangin))