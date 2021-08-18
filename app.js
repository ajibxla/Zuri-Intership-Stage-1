

const hamburger = document.querySelector('.hamburgers');
const navLinks = document.querySelector('.nav-links');
const open = document.querySelector('.open');
const close = document.querySelector('.close');

hamburger.addEventListener('click', ()=>{
    navLinks.classList.toggle('show');
})


