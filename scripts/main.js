function post_slider_creation(){
  $('.posts_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        }
      }
    ]
});
}
function hero_slider_creation(){
  $('.hero-slider').slick({
    dots: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    vertical: true,
    prevArrow: $('.hero-prev'),
    nextArrow: $('.hero-next'),
    appendDots: $('.slick-slider-dots'),
    customPaging: function(slider, i) {
      // this example would render "tabs" with titles
      return '<a href="#"><span class="hero-dot"></span></a>';
    },
  });
}

function wow_creation(){
  new WOW().init();
}

function sidebar_function(){
  $(document).ready(function(){
    $('.sidebarBtn').click(function(){
      $('.sidebar').toggleClass('active');
      $('.sidebarBtn').toggleClass('toggle');
    });
  });
  
  $('.pretty').click(function(){
    $(this).toggleClass('pretty-active');
  });
}

$(document).ready(function(){
  sidebar_function();
  try{
    hero_slider_creation();
  }catch(e){

  }
  try{
    post_slider_creation();
  }catch(e){

    
  }
  try{
    wow_creation();
  }catch(e){

  }                      
});