const $ = require('jquery')

//navbar sólida no scroll

$(document).ready(function() {

const menuButton = document.querySelector('.menu-btn')
const menuBtnBurger = document.querySelector('.menu-btn-burger')
const nav = document.querySelector('.nav')
const menuNav = document.querySelector('.menu-nav')
const navLinks = document.querySelectorAll('.menu-nav-item')

let showMenu = false

menuButton.addEventListener('click', toggleMenu)

function toggleMenu(){

    const elements = [nav, menuNav, menuBtnBurger]

    if(!showMenu){
        elements.forEach(el => {
            el.classList.add('open')
        })

        navLinks.forEach(link => {
            link.classList.add('open')
        })

        showMenu = true
    } else {
        elements.forEach(el => {
            el.classList.remove('open')
        })

        navLinks.forEach(link => {
            link.classList.remove('open')
        })

        showMenu = false
    }
}


function activateLink(element){

    var links = document.getElementsByClassName('menu-nav-link')
    console.log(links)
    for(var i = 0; i< links.length; i++){
        links[i].classList.remove('active')
    }
    console.log(element)

    element.classList.add('active')


    const elements = [nav, menuNav, menuBtnBurger]
    elements.forEach(el => {
        el.classList.remove('open')
    })

    navLinks.forEach(link => {
        link.classList.remove('open')
    })

    showMenu = false
}

    $(window).scroll(function() {

        var height = $('.navbar-container').height();
        var scrollTop = $(window).scrollTop();

        if (scrollTop >= height) {
            $('.navbar-container').addClass('solid-nav');
        } else {
            $('.navbar-container').removeClass('solid-nav');
        }

    });
});