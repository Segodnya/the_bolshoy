let button = document.querySelector(".header-mobile__button");
let menu = document.querySelector("menu");

button.addEventListener("click", function () {
  menu.classList.toggle("menu-active");
});
