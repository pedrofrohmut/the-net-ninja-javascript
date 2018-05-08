// ELEMENTS
const menuUl = document.querySelector("header nav ul");
const burgerNav = document.querySelector(".burger-nav");

// MENU TOGGLER
const toggleOpen = function (e) {
    menuUl.classList.toggle("open");
    e.preventDefault(e);
}

// LISTENERS
burgerNav.addEventListener("click", e => toggleOpen(e));