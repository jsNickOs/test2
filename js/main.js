document.addEventListener('DOMContentLoaded', onReady);



function onReady () {
    const btnToggle = document.getElementById('btnToggle');
    btnToggle.addEventListener('click', onBtnToggleClick);
}

function onBtnToggleClick (event) {
    const target = event.currentTarget;
    const divMenu = document.querySelector('.header__main-menu');
    if (divMenu) {
        divMenu.classList.toggle('header__main-menu--active');
    }
    target.classList.toggle('header__toggle-button--opened');
}
