document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#sffhome");e&&new Swiper(e,{slidesPerView:1,loop:!0,effect:"fade",speed:1500,fadeEffect:{crossFade:!0},autoplay:{delay:3e3,pauseOnMouseEnter:!0},navigation:{nextEl:".button-next",prevEl:".button-prev"},pagination:{el:".swiper-pagination",clickable:!0}});let t=document.querySelector("#sffjoin");t&&new Swiper(t,{slidesPerView:2,spaceBetween:180,centeredSlides:!0,cssMode:!0,breakpoints:{1024:{slidesPerView:4,centeredSlides:!1,width:null,spaceBetween:30,cssMode:!1}}})});
