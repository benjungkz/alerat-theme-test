
// Scroll Top
$(document).scroll(function() {
  var y = $(this).scrollTop();
  var deviceHeight = window.screen.height;

  $('.header__button').each(function () {
      if (y > deviceHeight) {
          $(this).css({
              opacity: 1,
              transition: 'all 0.3s ease-in-out'
          });
      } else {
          $(this).css('opacity', '0');
      }
  });


  var NOTIFICATION_BAR_HEIGHT = 30;

});

$(document).ready(function(){

  const IPAD_SCREEN_WIDTH  = 768;
  const DROPDOWN_PAGE_VIEW = 5;

  var is_notification_off = false;
  var present_url = window.location.pathname;
  var screenWidth = document.documentElement.clientWidth;


  initNotificaionBar();
  closeNotificationBar();
 
 
  // Product Dropdown (Desktop)
  if(screenWidth >= IPAD_SCREEN_WIDTH){
 
    const dropdown_el = $('.js-dropdown');
    
    const menu_el = $('.js-products');
    const menu_svg = $('.js-icon-dropdown');
    
    
    // Product Dropdown
    const dropdownSwiper = new Swiper('.js-dropdown-slider',{
      slidesPerView: DROPDOWN_PAGE_VIEW,
      centeredSlides: true,
      spaceBetween: 1,
      loop: true,
      roundLengths: true,
      observer: true,
      observeParents: true,
    
      loopAdditionalSlides: 30,
        // Navigation arrows
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints: {
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 6,
        },
        1366: {
          slidesPerView: 7,
        },
        2160: {
          slidesPerView: 7,
        }
      }
    });

    dropdownSwiper.on('imagesReady',()=>{
      var init_slide = dropdownSwiper.slides[dropdownSwiper.activeIndex];
      var init_event_img = $(init_slide).find('.dropdown__event');
      init_event_img.addClass('dropdown__event--on');
    });

    dropdownSwiper.on('slideChange', (event)=>{
    
      var current_slide = dropdownSwiper.slides[dropdownSwiper.activeIndex];
      var previous_slide = dropdownSwiper.slides[dropdownSwiper.previousIndex];
      var current_event_img = $(current_slide).find('.dropdown__event');
      var previous_event_img = $(previous_slide).find('.dropdown__event');

      current_event_img.addClass('dropdown__event--on');
      previous_event_img.removeClass('dropdown__event--on');

    });

 
    // Init (for Index)
    if( present_url == '/'){
        dropdown_el.removeClass('dropdown__inactive');
        dropdown_el.addClass('dropdown__active');
        menu_svg.removeClass('icon__rotate-reverse');
        menu_svg.addClass('icon__rotate');
    }
    
    // Handler
    menu_el.on('click',function(e){
      e.preventDefault();      
      var is_inactive = dropdown_el.hasClass('dropdown__inactive');
      
      if(is_inactive){
          dropdown_el.removeClass('dropdown__inactive');
          dropdown_el.addClass('dropdown__active');
          menu_svg.removeClass('icon__rotate-reverse');
          menu_svg.addClass('icon__rotate');

          // Change event image
          var init_slide = dropdownSwiper.slides[dropdownSwiper.activeIndex];
          var init_event_img = $(init_slide).find('.dropdown__event');
          init_event_img.addClass('dropdown__event--on');
      }else{
          dropdown_el.removeClass('dropdown__active');
          dropdown_el.addClass('dropdown__inactive');
          menu_svg.removeClass('icon__rotate');
          menu_svg.addClass('icon__rotate-reverse');
          
          // Change event image
          var current_slide = dropdownSwiper.slides[dropdownSwiper.activeIndex];
          var previous_slide = dropdownSwiper.slides[dropdownSwiper.previousIndex];
          var current_event_img = $(current_slide).find('.dropdown__event');
          var previous_event_img = $(previous_slide).find('.dropdown__event');
      
          current_event_img.addClass('dropdown__event--on');
          previous_event_img.removeClass('dropdown__event--on');
      }

    });
    
    // Sales Bedge
    var slider = $(dropdownSwiper.el);
    var init_slide = slider.find('.swiper-slide')[DROPDOWN_PAGE_VIEW];
    var init_event_img = $(init_slide).find('.dropdown__event');
    init_event_img.addClass('dropdown__event--on');
  }
  
  // Product Dropdown (Mobile)
  if(screenWidth < IPAD_SCREEN_WIDTH && present_url == '/'){
    const dropdownSwiperMoblie = new Swiper('.js-dropdown-slider-m',{
      slidesPerView: 2,
      centeredSlides: true,
      spaceBetween: 250,
      loop: true,
      roundLengths: true,
      observer: true,
      observeParents: true,
      loopAdditionalSlides: 30,
      freeMode: true,
      freeModeSticky: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
        // Navigation arrows
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }

    });

    dropdownSwiperMoblie.on('imagesReady',()=>{
      console.log('after init');
      var init_slide = dropdownSwiperMoblie.slides[dropdownSwiperMoblie.activeIndex];
      var init_event_img = $(init_slide).find('.dropdown__event');
      console.log(init_event_img);
      init_event_img.addClass('dropdown__event--on');
    });

    dropdownSwiperMoblie.on('slideChange', (event)=>{
    
      var current_slide = dropdownSwiperMoblie.slides[dropdownSwiperMoblie.activeIndex];
      var previous_slide = dropdownSwiperMoblie.slides[dropdownSwiperMoblie.previousIndex];
      var current_event_img = $(current_slide).find('.dropdown__event');
      var previous_event_img = $(previous_slide).find('.dropdown__event');

      current_event_img.addClass('dropdown__event--on');
      previous_event_img.removeClass('dropdown__event--on');

    });

    dropdownSwiperMoblie.on('touchStart', function(){
      dropdownSwiperMoblie.autoplay.stop();
    })


  }

  
  $('.policy__exit').on('click', ()=>{
    window.top.close();
  });
  
  // Benefit Slider
  const product_slider = $('.slider--product');
  activateSlider(product_slider);
  function activateSlider(el){
    const slide_dot_on_src ="https://cdn.shopify.com/s/files/1/0303/7033/2812/files/icon-slide-dot-on.png?v=1600882455";
    const slide_dot_off_src ="https://cdn.shopify.com/s/files/1/0303/7033/2812/files/icon-slide-dot-off.png?v=1600882455" 
     
    // Create Slider
    $(el).slick({
      dots: true,
      customPaging: function(slider, i){
        // Append Dots
        return '<img class="slider__dot" src="' + slide_dot_off_src + '"/>';
      },
      appendDots: '.slider__dots',
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2500,
      cssEase: 'cubic-bezier(0.83, 0.09, 0.41, 0.9)',
      pauseOnHover: true,
      swipe: true
    });

    // Init
    $(el).init(function(slick){
      // Set dots on first slide 
      var init_dot = $(this).find('.slick-active li').eq(0).find('.slider__dot');
      $(init_dot).attr('src',slide_dot_on_src);
    })

    // Event
    $(el).on('afterChange',function(event, slick, currentSlide){
      // initialization
      var current_slide_dots = $(this).find('.slick-active li').find('.slider__dot');
      $(current_slide_dots).attr('src',slide_dot_off_src);

      // Set current dot
      var current_slide_dot = $(this).find('.slick-active li').eq(currentSlide).find('.slider__dot');
      $(current_slide_dot).attr('src',slide_dot_on_src);
    });
  }


  // Product Nav Slider-1
  const product_nav = $('.js-slider--nav');
  $(product_nav).on("init",(slick)=>{
    // Slider DOM is set before this callback function
    // init slide
    var first_slide = $(product_nav).find('.slick-current');
    first_slide.addClass('slider__image--active'); 

  })

  $(product_nav).slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false,
    dots: false,
    asNavFor: '.js-slider--main',
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 768,
        settings:{
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1024,
        settings:{
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1366,
        settings:{
          slidesToShow: 5
        }
      }
    ]
  });

  $(product_nav).on('afterChange', (event, slick, currentSlide) => {
    
    // Reset all
    $(slick.$slides).each((index, item)=>{
      $(item).removeClass('slider__image--active');
    });

    // Set opacity
    $(slick.$slides.get(currentSlide)).addClass('slider__image--active');

  });


  // Product Slider-1
  const product_main = $('.js-slider--main');

  $(product_main).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dot: false,
    lazyLoad: 'ondemand',
    asNavFor: '.js-slider--nav'
  });



  // Product Nav Slider-2
  const product_nav_2 = $('.js-slider--nav-2');
  $(product_nav_2).on("init",(slick)=>{
    // Slider DOM is set before this callback function
    // init slide
    var first_slide = $(product_nav).find('.slick-current');
    first_slide.addClass('slider__image--active');    

  })

  $(product_nav_2).slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false,
    dots: false,
    lazyLoad: 'ondemand',
    asNavFor: '.js-slider--main-2',
    responsive: [
      {
        breakpoint: 768,
        settings:{
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1024,
        settings:{
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1366,
        settings:{
          slidesToShow: 5
        }
      }
    ]
  });

  $(product_nav_2).on('afterChange', (event, slick, currentSlide) => {
    
    // Reset all
    $(slick.$slides).each((index, item)=>{
      $(item).removeClass('slider__image--active');
    });

    // Set opacity
    $(slick.$slides.get(currentSlide)).addClass('slider__image--active');

  });


  // Product Slider-2
  const product_main_2 = $('.js-slider--main-2');

  $(product_main_2).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dot: false,
    lazyLoad: 'ondemand',
    asNavFor: '.js-slider--nav-2'
  });



  productCustomOptionHandler();


  // Mobile Navigation
  const nav_button = $('.header__button--nav');
  const nav_close = $('.header__menu--close');
  const nav = $('.header__navbar');


  nav_button.on('click', function(event){
    nav.addClass('header__navbar--show');
  });

  nav_close.on('click', function(evnet){
    nav.removeClass('header__navbar--show');
  })

  // Mobile Products Pannel
  const nav_products_button = $('.js-header__menu--products');
  const nav_products_pannel = $('.js-header__navbar--products');
  const nav_products_back_button = $('.js-dropdown__back');

  nav_products_button.on('click', (event)=>{
    nav_products_pannel.addClass('header__navbar--show-products');
  });

  nav_products_back_button.on('click', (event)=>{
    nav_products_pannel.removeClass('header__navbar--show-products');
  });

  // Mobile Shop Now button
  var path_name = window.location.pathname;
  var is_single;

  if(path_name.search('products') != -1){
  
    var el_length = $('.js-product-single').length;
    
    if(el_length > 0){
      is_single = true;
    }else{
      is_single = false;
    }
  }

  if(path_name.search('products') != -1 && is_single == false){
   
    var tagline_top = $(".tagline__desc--product").position().top;
    var tagline_bottom = tagline_top + $('.tagline__desc--product').outerHeight();

    var action_top = $(".list__title--product:first").position().top;
    var action_bottom = action_top + $('.list__title--product:first').outerHeight();

    const bar = $('.section--bar');

    $(window).on("scroll", function(){
      
      var view_top = $(window).scrollTop();
      var view_bottom = view_top + $(window).height();
    
      if(tagline_bottom < view_bottom || action_bottom > view_bottom){
        bar.addClass("bar__inactive");
      }else if(view_bottom < tagline_bottom || action_bottom < view_bottom){
        bar.removeClass("bar__inactive");
      }
    });
  }

  // Subscription Manage Page Handler
  $('.ro-translation-upcoming_orders_title').text('Upcoming orders >');
     

  function productCustomOptionHandler(){
    var present_url = window.location.pathname;
    // search() return -1 if there is no string in a compared string
    var is_flash_page = present_url.search('alerta-flash')
  
    // initial slider
    $('.option-black').addClass('slider__none');
    $('.option-white').removeClass('slider__none');

    let option = $('.productOption__container--active');
    if(is_flash_page != -1 ){
      option.on('click',(e)=>{
          var selection = $(e.target).parents('.productOption').find('.productOption__name').text().toLowerCase();
          if(selection == 'white'){
            $('.option-black').addClass('slider__none');
            $('.option-white').removeClass('slider__none');
            product_nav.slick('setPosition');
            product_main.slick('setPosition');
            product_nav.slick('slickGoTo', 0);
          }
          else if(selection == 'black'){
            $('.option-white').addClass('slider__none');
            $('.option-black').removeClass('slider__none');
            product_nav_2.slick('setPosition');
            product_main_2.slick('setPosition');
            product_nav_2.slick('slickGoTo', 0);
          }
      })
    }
  }

  function initNotificaionBar(){
    if(!is_notification_off){
      var notification_container = $('.notification__container');
      notification_container.addClass('notification__container--active');
    }
  }

  function closeNotificationBar(){
    var close_button = $('.notification__close');
    close_button.on('click',()=>{
      var notification_container = $('.notification__container');
      notification_container.addClass('notification__container--inactive');
      is_notification_off = true;
    });
  }
});
