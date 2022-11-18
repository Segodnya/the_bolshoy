let button = document.querySelector(".header-mobile__button");
let closeButton = document.querySelector(".menu__close");
let menu = document.querySelector(".menu");

button.addEventListener("click", function () {
  menu.classList.toggle("menu-active");
});

closeButton.addEventListener("click", function () {
  menu.classList.toggle("menu-active");
});
