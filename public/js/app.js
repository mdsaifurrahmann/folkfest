import Swiper from"swiper/bundle";import"swiper/css/bundle";document.addEventListener("DOMContentLoaded",(function(){let e=document.querySelector(".menu"),t=document.querySelectorAll(".nav-item");e.addEventListener("click",(function(){this.classList.toggle("opened"),this.setAttribute("aria-expanded",this.classList.contains("opened")),t.forEach((function(t){e.classList.contains("!opened")&&(t.classList.toggle("open"),t.setAttribute("tabindex","0")),e.classList.contains("!opened")||(t.classList.toggle("open"),t.setAttribute("tabindex","-1"))}))}));const n=new Date(2025,7,26),s=document.querySelector(".count-down p");function o(){const e=new Date;if(e>=n)return void(s.textContent="Event has started!");let t=new Date(e),o=0;for(;;){const e=new Date(t);if(e.setMonth(t.getMonth()+1),e>n)break;o++,t.setMonth(t.getMonth()+1)}const i=Math.floor((n-t)/864e5),r=n-t-1e3*i*60*60*24,a=Math.floor(r/36e5),c=Math.floor(r%36e5/6e4),l=Math.floor(r%6e4/1e3);s.innerHTML=`${o} Month${1!==o?"s":""} | ${i} DAYS <span class="hidden lg:inline-block">|</span> <br class="lg:hidden">${a} HOURS | ${c} MIN | ${l} SEC`}s&&(o(),setInterval(o,1e3));let i=document.querySelector("#sffjoin"),r=document.querySelector("#sffhome");if(i)new Swiper(i,{slidesPerView:2,spaceBetween:180,centeredSlides:!0,cssMode:!0,breakpoints:{1024:{slidesPerView:4,centeredSlides:!1,width:null,spaceBetween:30,cssMode:!1}}});if(r)new Swiper(r,{slidesPerView:1,breakpoints:{1280:{slidesPerView:1}},pagination:{el:".swiper-pagination",clickable:!0}});feather.replace()}));