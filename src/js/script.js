const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const image = document.querySelector('.fa-bars');

hamburger.addEventListener('click', () => {
    if (!nav.classList.contains('show')) {
        nav.classList.toggle('show');
        image.src = '../images/icon-close.svg';
    } else {
        nav.classList.remove('show');
        image.src = '../images/icon-hamburger.svg';
    }
})