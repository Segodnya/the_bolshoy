"use strict";

// slider
let slideIndex = 1,
  offset = 0;

const slides = document.querySelectorAll(".swiper__image"),
  btnPrev = document.querySelector(".swiper__button_type_prev"),
  btnNext = document.querySelector(".swiper__button_type_prev"),
  slidesWrapper = document.querySelector(".swiper__wrapper"),
  slidesField = document.querySelector(".swiper__items"),
  slideItem = document.querySelector(".swiper__item"),
  widthSlide = 450;

slidesField.style.width = widthSlide * slides.length + "px";

btnNext.addEventListener("click", () => {
  if (offset == widthSlide * (slides.length - 1)) {
    offset = 0;
  } else {
    offset += widthSlide;
  }

  slidesField.style.transform = `translateX(-${offset}px)`;

  if (slideIndex == slides.length) {
    slideIndex = 1;
  } else {
    slideIndex++;
  }
});

btnPrev.addEventListener("click", () => {
  if (offset == 0) {
    offset = widthSlide * (slides.length - 1);
  } else {
    offset -= widthSlide;
  }

  slidesField.style.transform = `translateX(-${offset}px)`;

  if (slideIndex == 1) {
    slideIndex = slides.length;
  } else {
    slideIndex--;
  }
});
