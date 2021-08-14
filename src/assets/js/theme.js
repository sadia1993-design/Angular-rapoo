(function($) {
'use strict';
    

    try {
      window.Popper = require('popper.js').default;
      window.jQuery = window.$ = require('jquery');
      require('jquery.easing'); // dat works :3
  } catch (e) {}

 
 
// blog slider
$('.slick_blog').slick({
  infinite: true,
  slidesToShow: 3,
  dots: true,
  speed: 300,
  lazyLoad: 'ondemand',
  cssEase: 'linear',
  slidesToScroll: 1,
  
});
 
/* ----------------------------------------------------------- */
    /*  Fixed header
    /* ----------------------------------------------------------- */


    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 70) {
            $('.site-navigation,.trans-navigation').addClass('header-white');
        } else {
            $('.site-navigation,.trans-navigation').removeClass('header-white');
        }

    });

 


  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').on('click', function(event) {
    $('.navbar-collapse').collapse('hide');
  });

   

         

 

})(jQuery); // End of use strict
