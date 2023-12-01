// @ts-nocheck
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  speed: 700,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    // disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1.5,
  //     spaceBetween: 20,
  //   },
  //   350: {
  //     slidesPerView: 2.2,
  //     spaceBetween: 20,
  //   },

  //   820: {
  //     slidesPerView: 3.4,
  //     spaceBetween: 30,
  //   },
  // },
});
