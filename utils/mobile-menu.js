const menuButton = document.querySelector(".header__navbar__menu-button");

const menu = document.querySelector(".header__navbar__menu");

const exitButton = document.querySelector(".header__navbar__menu__exit");

const body = document.window;

menuButton.addEventListener("click", () => {
  menu.style.left = "0";
  menu.style.opacity = "1";
});

exitButton.addEventListener("click", () => {
  menu.style.left = "-100vw";
  menu.style.opacity = "0";
});
