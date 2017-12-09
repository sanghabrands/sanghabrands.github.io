;(function ($) {

  $('.mobile-btn').on('click', function(){
    $(this).toggleClass('is-open');
    $('body').toggleClass('is-fixed');
    $('.header-nav').toggleClass('is-open');
  });


  $(window).scroll(function() {
  var scroll = getCurrentScroll();
    if ( scroll >= 48 && !$('body').hasClass('is-fixed') ) {
      $('.header-menu').addClass('is-scrolling');
      $('#main-logo-text, #main-logo').addClass('is-scrolling');
    } else {
      $('.header-menu').removeClass('is-scrolling');
          $('#main-logo-text, #main-logo').removeClass('is-scrolling');
    }
});

  function getCurrentScroll() {
  return window.pageYOffset || document.documentElement.scrollTop;
  }

})(jQuery)

;(function ($) {

  $('.mobile-btn').on('click', function(){
    $(this).toggleClass('is-open');
    $('body').toggleClass('is-fixed');
    $('.header-nav-portfolio').toggleClass('is-open');
  });


  $(window).scroll(function() {
  var scroll = getCurrentScroll();
    if ( scroll >= 48 && !$('body').hasClass('is-fixed') ) {
      $('.header-menu-portfolio').addClass('is-scrolling');
      $('#main-logo-portfolio-text, #main-logo-portfolio').addClass('is-scrolling');
    } else {
      $('.header-menu-portfolio').removeClass('is-scrolling');
          $('#main-logo-portfolio-text, #main-logo-portfolio').removeClass('is-scrolling');
    }
});

  function getCurrentScroll() {
  return window.pageYOffset || document.documentElement.scrollTop;
  }

})(jQuery)
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


$(function() {
    var selectedClass = "";
    $(".fil-cat").click(function(){ 
    selectedClass = $(this).attr("data-rel"); 
     $("#portfolio").fadeTo(100, 0.1);
     $("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $("#portfolio").fadeTo(300, 1);
    }, 300); 
  });
});
;(function ($) {

  $('.carousel-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true
  });

  $('.carousel-arrow-next').on('click', function(){
    $('.carousel-carousel').slick('slickNext')
  });

  $('.carousel-arrow-prev').on('click', function(){
    $('.carousel-carousel').slick('slickPrev')
  });

})(jQuery)

;(function ($) {

  $('select').selectric();

  $('.selectric').on('click', function(){
    $(this).toggleClass('is-open');
  });

  $('.selectric-items li').on('click', function(){
    $('.selectric').removeClass('is-open');
  });

  $('select').on('selectric-close', function(event, element, selectric) {
    $('.selectric').removeClass('is-open');
  });

})(jQuery)

;(function ($) {

  $('.testimonial-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true
  });

  $('.testimonial-arrow-next').on('click', function(){
    $('.testimonial-carousel').slick('slickNext')
  });

  $('.testimonial-arrow-prev').on('click', function(){
    $('.testimonial-carousel').slick('slickPrev')
  });

})(jQuery)

;(function ($) {

  $('.work-carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: "unslick"
      }
    ]
  });

})(jQuery)