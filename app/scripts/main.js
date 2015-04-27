$(document).ready(function($) { // Start of Document Ready Javascript
 'use strict';

  // Smooth scrolling to sections
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top // Amount of offset
          }, 600);
          return false;
        }
      }
    });
  });

  // Scrollspy
  $('body').scrollspy({ target: '#navbar' });

  //show and hide navbar-brand on scroll
  // $(window).scroll(function() {    
  //   var scroll = $(window).scrollTop();
  //   if (scroll >= 500) {
  //     $('.navbar-brand').removeClass('hidden').addClass('visible animated slideInLeft');
  //   } else {
  //     $('.navbar-brand').removeClass('visible animated slideInLeft').addClass('hidden');
  //   }
  // });

  // Add pulse to element on mouseover
  $('.phone').hover(
    function () {
      $('.glyphicon-earphone').addClass('pulse');
    },
    function () {
      $('.glyphicon-earphone').removeClass('pulse');
    }
  );

  // Add pulse to element on mouseover
  $('.arrow').hover(
    function () {
      $('.glyphicon-arrow-down').addClass('pulse');
    },
    function () {
      $('.glyphicon-arrow-down').removeClass('pulse');
    }
  );

  // collapse mobile navigation menu on nav-link click
  $('.nav-link').click(
    function () {
      $('.navbar-collapse').removeClass('in');
    }
  );

}); // End of Document Ready Javascript
