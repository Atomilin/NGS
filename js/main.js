//*********************************************Функция клика по крестику*******************************************//

//открытие и закрытие меню на главном экране
function openMenu() {
    var menuNavPhone = document.getElementById("menu-phone");
    menuNavPhone.style.display = "flex";
    document.getElementsByClassName('menu-phone__wrapper')[0].style.position = 'fixed';
}

function closeMenu() {
    var menuNavPhone = document.getElementById("menu-phone");
    menuNavPhone.style.display = "none";
    document.getElementsByClassName('menu-phone__wrapper')[0].style.position = 'absolute';
}


//открытие и закрытие модального окна
/*function openModul() {
    var modul = document.getElementById("modul");
    modul.style.display = "flex";
    document.getElementsByClassName('modul__wrapper')[0].style.position = 'fixed';
}*/

function closeModul() {
    var modul = document.getElementById("modul");
    modul.style.display = "none";
    document.getElementsByClassName('modul__wrapper')[0].style.position = 'absolute';
}

