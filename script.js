'use strict'
$(document).ready(function(){


$('.image_block').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    dots: true,
    autoplay:true,
  //  appendArrows:'.slider__nav',
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 680,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  $('#newsSlider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    console.log($('.news__block')[nextSlide]);
   $('[data-slick-index="' + currentSlide + '"]').css({'opacity':'0.3'});
   $('[data-slick-index="' + nextSlide + '"]').css({'opacity':'1'});

})
                  
})
//   $('.slider-for').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.slider-nav',

//   });
//   $('.slider-nav').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.slider-for',
//     dots: true,
//     centerMode: true,
//     focusOnSelect: true,
//     infinite: true,
//     autoplay:true,
//     cssEase: 'linear',
//     speed:200

//   })
// })