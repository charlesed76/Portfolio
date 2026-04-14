(function($) {
  "use strict";

  // Navbar scroll effect
  $(function() {
    var header = $(".start-style");
    $(window).scroll(function() {
      if ($(window).scrollTop() >= 10) {
        header.removeClass('start-style').addClass("scroll-on");
      } else {
        header.removeClass("scroll-on").addClass('start-style');
      }
    });
  });

  // Hero animation trigger
  $(document).ready(function() {
    $('body.hero-anime').removeClass('hero-anime');
  });

  // Menu hover
  $('body').on('mouseenter mouseleave', '.nav-item', function(e) {
    if ($(window).width() > 750) {
      var _d = $(e.target).closest('.nav-item');
      _d.addClass('show');
      setTimeout(function() {
        _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
      }, 1);
    }
  });

  // Dark / light switch
  $("#switch").on('click', function() {
    $("body").toggleClass("dark");
    $("#switch").toggleClass("switched");
  });

  // Smooth scroll
  $('a[href^="#"]').on('click', function(e) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      e.preventDefault();
      $('html, body').stop().animate({ scrollTop: target.offset().top }, 900);
    }
  });

})(jQuery);

// Scroll reveal — Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(function(el) {
    observer.observe(el);
  });
});
