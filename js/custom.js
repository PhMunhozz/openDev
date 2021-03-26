$(document).ready(function(){
    $('.parallax').parallax();
  });


  $('.carousel.carousel-slider').carousel({
 
    indicators: true
  });

  setInterval(function(){
    $('.carousel').carousel('next');
  }, 4000);