
$(document).ready(function(){
    // Main slider
    $('.slider').slick({
        prevArrow: $ ('.slider-arrows__prew'),
        nextArrow: $ ('.slider-arrows__next'),
        appendDots: $ ('.slider-dots'),
        dots: true
      });

    // Listning slider
    $('.listing-sec .list').slick({
      prevArrow: $ ('.listing-sec .arrows__next'),
      nextArrow: $ ('.listing-sec .arrows__prew'),
      }); 
    $(".js-range-slider").ionRangeSlider({
      type: "double",
      skin: "round",
      min: 0,
      max: 15,
      to: 10
    });
  });
  