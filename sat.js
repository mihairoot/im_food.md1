let navbar=document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
   grabCursor:true,
   loop:true,
   centeredSlides:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".food-slider", {
   grabCursor:true,
   loop:true,
   centeredSlides:true,
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
   },
});

let previewContainer = document.querySelector('.food-preview-container');
let previewBox = previewContainer.querySelectorAll('.food-preview');

document.querySelectorAll('.food .slide').forEach(food =>{
   food.onclick = () =>{
      previewContainer.style.display = 'flex';
      let name = food.getAttribute('data-name');
      previewBox.forEach(preveiw =>{
         let target = preveiw.getAttribute('data-target');
         if(name == target){
            preveiw.classList.add('active');
         }
      });
   };
});

previewContainer.querySelector('#close-preview').onclick = () =>{
   previewContainer.style.display = 'none';
   previewBox.forEach(close =>{
      close.classList.remove('active');
   });
};

var swiper = new Swiper(".menu-slider", {
   grabCursor:true,
   loop:true,
   autoHeight:true,
   centeredSlides:true,
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
});



var swiper = new Swiper(".review-slider", {
   spaceBetween: 20,
   centeredSlides: true,
   autoplay: {
     delay: 7500,
     disableOnInteraction: false,
   },
   loop:true,
   breakpoints: {
     0: {
         slidesPerView: 1,
     },
     640: {
       slidesPerView: 2,
     },
     768: {
       slidesPerView: 2,
     },
     1024: {
       slidesPerView: 3,
     },
   },
 });


function initParadoxWay() {
   "use strict";
  
   if ($(".testimonials-carousel").length > 0) {
       var j2 = new Swiper(".testimonials-carousel .swiper-container", {
           preloadImages: false,
           slidesPerView: 1,
           spaceBetween: 20,
           loop: true,
           grabCursor: true,
           mousewheel: false,
           centeredSlides: true,
           pagination: {
               el: '.tc-pagination',
               clickable: true,
               dynamicBullets: true,
           },
           navigation: {
               nextEl: '.listing-carousel-button-next',
               prevEl: '.listing-carousel-button-prev',
           },
           breakpoints: {
               1024: {
                   slidesPerView: 3,
               },
               
           }
       });
   }
   
   setInterval(function () {
       var size = randomValue(sArray);
       $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
       $('.individual-bubble').animate({
           'bottom': '100%',
           'opacity': '-=0.7'
       }, 4000, function () {
           $(this).remove()
       });
   }, 350);
   
}

$(document).ready(function () {
   initParadoxWay();
});




function initParadoxWay() {
   "use strict";
  
   if ($(".testimonials-carousel").length > 0) {
       var j2 = new Swiper(".testimonials-carousel .swiper-container", {
           preloadImages: false,
           slidesPerView: 1,
           spaceBetween: 20,
           loop: true,
           grabCursor: true,
           mousewheel: false,
           centeredSlides: true,
           pagination: {
               el: '.tc-pagination',
               clickable: true,
               dynamicBullets: true,
           },
           navigation: {
               nextEl: '.listing-carousel-button-next',
               prevEl: '.listing-carousel-button-prev',
           },
           breakpoints: {
               1024: {
                   slidesPerView: 3,
               },
               
           }
       });
   }
   

   
   
   setInterval(function () {
       var size = randomValue(sArray);
       $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
       $('.individual-bubble').animate({
           'bottom': '100%',
           'opacity': '-=0.7'
       }, 4000, function () {
           $(this).remove()
       });
   }, 350);
   
}

$(document).ready(function () {
   initParadoxWay();
});