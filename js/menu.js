let button = document.querySelector(".header-mobile__button");
// let closeButton = document.querySelector(".header-mobile__button");
let menu = document.querySelector("menu__close");

button.addEventListener("click", function () {
  menu.classList.toggle("menu-active");
});

/* closeButton.addEventListener("click", function () {
  menu.classList.toggle("menu-active");
}); */
