
$(document).ready(function(){
    // Main slider
    $('.slider').slick({
        prevArrow: $ ('.slider-arrowPrew'),
        nextArrow: $ ('.slider-arrowNext'),
        appendDots: $ ('.slider-dots'),
        dots: true
      });

    // Listning slider
    $('.listing-sec__list').slick({
      prevArrow: $ ('.listing-sec__slider-arrows-next'),
      nextArrow: $ ('.listing-sec__slider-arrows-prew'),
      }); 
    $(".js-range-slider").ionRangeSlider({
      type: "double",
      skin: "round",
      min: 0,
      max: 15,
      to: 10
    });
  });
  