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
filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("case-study-project");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
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