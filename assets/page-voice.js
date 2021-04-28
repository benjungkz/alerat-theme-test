$(document).ready(function(){
    var videoSwiper = new Swiper('.js-product__video--slider',{
      slidesPerView: 1,
      spaceBetween: 1,
        // Navigation arrows    
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      }
    });

    var mySwiper = new Swiper('.js-product__usage--slider',{
        slidesPerView: 1,
        spaceBetween: 1,
        freeMode: true,
        freeModeSticky: true,
        autoplay: true,
          // Navigation arrows
        pagination: {
          el: '.swiper-pagination-usage',
          clickable: true,
        },
        
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
    });
});
  