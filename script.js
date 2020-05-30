const btnBurger = document.querySelector('.btn-burger')
const burgerTop = document.querySelector('.top')
const burgerMiddle = document.querySelector('.middle')
const burgerBottom = document.querySelector('.bottom')
const menu = document.querySelector('.menu')
let clicked = false

btnBurger.addEventListener('click', (e) => {
    if(!clicked) {
        menu.style.display = 'flex'
        // menu.style.opacity = "1"
        burgerTop.style.transform = "rotateZ(38deg)"
        burgerBottom.style.transform = "rotateZ(-38deg)"
        burgerMiddle.style.opacity = "0"
        clicked = true
    } else {
        // menu.style.opacity = "0"
        menu.style.display = menu.style.display == '' ? 'none' : ''
        burgerTop.style.transform = "rotateZ(0deg)"
        burgerBottom.style.transform = "rotateZ(0deg)"
        burgerMiddle.style.opacity = "1"
        clicked = false
    }
})

menu.addEventListener('click', (e) => {
    console.log(window.innerWidth)
    if (window.innerWidth < 700){
        if(e.target !== btnBurger)
        menu.style.display = menu.style.display == '' ? 'none' : ''
        burgerTop.style.transform = "rotateZ(0deg)"
        burgerBottom.style.transform = "rotateZ(0deg)"
        burgerMiddle.style.opacity = "1"
        clicked = false
    }
})