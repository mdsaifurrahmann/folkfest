import { Autoplay } from "swiper/modules";
import "../css/home.css";

document.addEventListener("DOMContentLoaded", () => {
  const sffhome = document.querySelector("#sffhome");

  if (sffhome) {
    const sffhomeslider = new Swiper(sffhome, {
      slidesPerView: 1,
      loop: true,
      effect: "fade",
      speed: 1500,
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
});
