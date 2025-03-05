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

  let sffjoin = document.querySelector("#sffjoin");

  if (sffjoin) {
    const sffjoinslider = new Swiper(sffjoin, {
      slidesPerView: 2,
      spaceBetween: 60,
      centeredSlides: true,
      cssMode: true,
      // width: 450,
      breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
          centeredSlides: false,
          spaceBetween: 30,
        },
      },
    });
  }
});
