// import Swiper from "swiper/bundle";
// import "swiper/css/bundle";
import '../css/home.css';

document.addEventListener("DOMContentLoaded", () => {
  const sffhome = document.querySelector("#sffhome");

  if (sffhome) {
    const sffhomeslider = new Swiper(sffhome, {
      slidesPerView: 2,
      breakpoints: {
        1280: {
          slidesPerView: 1,
          
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
});
