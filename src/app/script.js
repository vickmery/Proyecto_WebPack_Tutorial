const abrirMenu = document.querySelector('.header__abrir-menu')
const cerrarMenu = document.querySelector('.header__cerrar-menu')
const ulList = document.querySelector('.header__nav-list')
const loginBtns = document.querySelector('.header__login')
const test = document.querySelector(".header__test")
const Img = document.getElementById('arrow-down')

cerrarMenu.addEventListener('click', () => {``
    ulList.style.setProperty('visibility', 'hidden');
    cerrarMenu.style.setProperty('visibility', 'hidden');
    loginBtns.style.setProperty('visibility', 'hidden');
    abrirMenu.style.setProperty('visibility', 'visible')
    test.style.setProperty('visibility', 'hidden');
})


abrirMenu.addEventListener('click', () => {
    ulList.style.setProperty('visibility', 'visible');
    cerrarMenu.style.setProperty('visibility', 'visible');
    loginBtns.style.setProperty('visibility', 'visible');
    abrirMenu.style.setProperty('visibility', 'hidden')

})




