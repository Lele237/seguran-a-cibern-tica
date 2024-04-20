window.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        let header = document.querySelector('#header')
        header.classList.toggle('rolagem', window.scrollY > 0)
    });

    const btnAbrirMenu = document.getElementById('btn-in');
    const btnFecharMenu = document.querySelector('.btn-fechar');
    const menu = document.getElementById('menu-mb');
    const overlay = document.getElementById('pan');

    let isOpen = false;

    btnAbrirMenu.addEventListener('click', () => {
        if (!isOpen) {
            menu.classList.add('onigiri');
            isOpen = true;
        }
    });

    btnFecharMenu.addEventListener('click', () => {
        menu.classList.remove('onigiri');
        isOpen = false;
    });

    overlay.addEventListener('click', () => {
        menu.classList.remove('onigiri');
        isOpen = false;
    });
    overlay-menu.addEventListener('click', () => {
        menu.classList.remove('onigiri');
        isOpen = false;
    });

});

window.addEventListener("DOMContentLoaded", function() {
    const btnAbrirSaiba = document.getElementById('btnAbrirSaiba');
    const btnFecharSaiba = document.getElementById('btnFecharSaiba');
    const secaoPi = document.getElementById('ip');
    let isOpen = false;

    btnAbrirSaiba.addEventListener('click', () => {
        secaoPi.style.width = '70%';
        isOpen = true;
    });

    btnFecharSaiba.addEventListener('click', () => {
        secaoPi.style.width = '0';
        isOpen = false;
    });
});


