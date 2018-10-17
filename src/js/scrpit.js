
// СЛАЙДЕР

$(document).ready(function(){
  $(".header-contacts__button").on("click", function() {
    $(".overlay").show()
  });
  $(".popup-close").on("click", function() {
    $(".overlay").hide()
  });
  $(".popup-form__input,.form__input").mask("+7 (999) 999-99-99");
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
        fade: true,
        centerMode: true,
        prevArrow: '<div class="slider-arrow slider-arrow-mobile slider-arrow-mobile__left"></div>',
        nextArrow: '<div class="slider-arrow slider-arrow-mobile slider-arrow-mobile__right"></div>'
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
  prevArrow: '<div class="slider-arrow slider-arrow-feedback slider-arrow-feedback__left"></div>',
  nextArrow: '<div class="slider-arrow slider-arrow-feedback slider-arrow-feedback__right"></div>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        fade: true,
        prevArrow: '<div class="slider-arrow slider-arrow-mobile slider-arrow-mobile__left feedback-mobile__left"></div>',
        nextArrow: '<div class="slider-arrow slider-arrow-mobile slider-arrow-mobile__right feedback-mobile__right"></div>'
      }
    }
  ]
 });
});