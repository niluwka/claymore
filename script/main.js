let header__burger = document.querySelector('.header__burger');
let span = document.querySelector('.header__burger span');
let menu = document.querySelector('.menu');
let body = document.querySelector('body');

header__burger.addEventListener('click', (e) => {
    menu.classList.toggle('active');
    span.classList.toggle('active');
    body.classList.toggle('lock');
})