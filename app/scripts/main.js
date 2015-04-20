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
            scrollTop: target.offset().top
          }, 400);
          return false;
        }
      }
    });
  });

  // Add pulse to element on mouseover
  $('.phone').hover(
    function () {
      $('.glyphicon-earphone').addClass('pulse');
    },
    function () {
      $('.glyphicon-earphone').removeClass('pulse');
    }
  );

  // collapse mobile navigation menu on nav-link click
  $('.nav-link').click(
    function () {
      $('.navbar-collapse').removeClass('in');
    }
  );

}); // End of Document Ready Javascript
