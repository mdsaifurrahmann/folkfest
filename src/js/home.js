import Swiper from "swiper/bundle";
import "swiper/css/bundle";

document.addEventListener("DOMContentLoaded", () => {
  let sffhome = document.querySelector("#sffhome");

  if (sffhome) {
    const sffhomeslider = new Swiper(sffhome, {
      slidesPerView: 1,
      navigation: false,
      breakpoints: {
        1280: {
          slidesPerView: 1,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
});
