const swiper = new Swiper(".swiper", {
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper__button_type_next",
    prevEl: ".swiper__button_type_prev",
  },
});

var swiperProjects = new Swiper(".swiper__projects", {
  slidesPerView: 1.5,
  spaceBetween: 0,
  centeredSlides: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
