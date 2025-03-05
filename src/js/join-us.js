import "../css/join-us.css";

document.addEventListener("DOMContentLoaded", () => {
  let sffjoin = document.querySelector("#joinus");

  if (sffjoin) {
    const sffjoinslider = new Swiper(sffjoin, {
      slidesPerView: 2,
      spaceBetween: 8,
      centeredSlides: true,
      cssMode: true,
      breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
          centeredSlides: false
        },
      },
    });
  }
});
