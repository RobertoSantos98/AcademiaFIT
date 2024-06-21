document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('nav.cabecalho-menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('open');
    });
});