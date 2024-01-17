//asigno elementos a variables
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

//agrego evento click al menu de email
menuEmail.addEventListener('click', menuEmailClick);

//funcion para mostrar el menu de email
function menuEmailClick() {
    desktopMenu.classList.toggle('inactive'); //el nombre de la clase va sin el punto
}