const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    if (!nav.classList.contains('show')) {
        document.querySelector('.fa-bars').style.display = 'none';
        const closeIcon = document.createElement('icon');
        closeIcon.className = 'fas fa-times';
        hamburger.appendChild(closeIcon);
        nav.classList.toggle('show');
    } else {
        document.querySelector('.fa-bars').style.display = 'block';
        document.querySelector('.fa-times').remove();
        nav.classList.remove('show');
    }
})