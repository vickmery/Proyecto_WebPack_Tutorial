const abrirMenu = document.querySelector('.header__abrir-menu')
const cerrarMenu = document.querySelector('.header__cerrar-menu')
const ulList = document.querySelector('.header__nav-list')
const loginBtns = document.querySelector('.header__login')

cerrarMenu.addEventListener('click', () => {
    ulList.style.setProperty('visibility', 'hidden');
    cerrarMenu.style.setProperty('visibility', 'hidden');
    loginBtns.style.setProperty('visibility', 'hidden');
    abrirMenu.style.setProperty('visibility', 'visible')
})


abrirMenu.addEventListener('click', () => {
    ulList.style.setProperty('visibility', 'visible');
    cerrarMenu.style.setProperty('visibility', 'visible');
    loginBtns.style.setProperty('visibility', 'visible');
    abrirMenu.style.setProperty('visibility', 'hidden')

})




