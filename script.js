// Toggle del menú en dispositivos móviles
const iconMenu = document.getElementById('icon_menu');
const navList = document.getElementById('nav').getElementsByTagName('ul')[0];

iconMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
    iconMenu.classList.toggle('active');
});

