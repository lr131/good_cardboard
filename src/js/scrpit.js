var Menu = {
  
  el: {
    ham: $('.nav'),
    menuTop: $('.nav-top'),
    menuMiddle: $('.nav-middle'),
    menuBottom: $('.nav-bottom')
  },
  
  init: function() {
    Menu.bindUIactions();
  },
  
  bindUIactions: function() {
    Menu.el.ham
        .on(
          'click',
        function(event) {
        Menu.activateMenu(event);
        event.preventDefault();
      }
    );
  },
  
  activateMenu: function() {
    Menu.el.menuTop.toggleClass('nav-top-click');
    Menu.el.menuMiddle.toggleClass('nav-middle-click');
    Menu.el.menuBottom.toggleClass('nav-bottom-click'); 
  }
};

Menu.init();

// СЛАЙДЕР

$(document).ready(function(){
 $('.production-slider__top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.production-slider__bottom',
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        prevArrow: '<div class="slider-arrow slider-arrow-prod slider-arrow__left"></div>',
        nextArrow: '<div class="slider-arrow slider-arrow-prod slider-arrow__right"></div>'
      }
    }
  ]
  });

 $('.production-slider__bottom').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.production-slider__top',
    arrows: true,
    prevArrow: '<div class="slider-arrow slider-arrow-prod slider-arrow__left"></div>',
    nextArrow: '<div class="slider-arrow slider-arrow-prod slider-arrow__right"></div>',
    centerMode: true,
    focusOnSelect: true,
    responsive: [
    {
      breakpoint: 768,
      settings: 'unslick'
    }
  ]
  });

 $('.feedback-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<div class="slider-arrow slider-arrow-feedback slider-arrow__left"></div>',
  nextArrow: '<div class="slider-arrow slider-arrow-feedback slider-arrow__right"></div>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        prevArrow: '<div class="slider-arrow slider-arrow-prod slider-arrow__left"></div>',
        nextArrow: '<div class="slider-arrow slider-arrow-prod slider-arrow__right"></div>'
      }
    }
  ]
 });
});