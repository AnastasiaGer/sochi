$(function(){
  $('.about__slider, .trip__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    speed: 300,
    fade: true,
    responsive: [{
      breakpoint: 601,
      settings: {
        arrows: false
      }
    }]
  });

  $('.surf-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="../images/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="../images/arrow-next.svg" alt=""></button>',
    responsive: [
      {
          breakpoint: 1210,
          settings: {
              slidesToShow: 3
          }
      },
      {
          breakpoint: 900,
          settings: {
              slidesToShow: 2
          }
      },
      {
          breakpoint: 720,
          settings: {
              slidesToShow: 1,
              centerMode: true
          }
      },
      {
          breakpoint: 426,
          settings: {
              slidesToShow: 1,
              centerMode: false,
          }
      }
  ]
  });


  $('.reviews-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="../images/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="../images/arrow-next.svg" alt=""></button>',
    autoplay: true,
    speed: 4000,
    fade: true,
  });

  $('.questions__item-title').on('click' , function(){

    $('.questions__item').removeClass('questions__item--active');
    $(this).parent().addClass('questions__item--active');

  });

  $('#fullpage').fullpage({
		//options here
		autoScrolling:true,
    scrollHorizontally: true,
    sectionSelector: '.page-section',
    scrollOverflow: false,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    scrollingSpeed: 700,
    scrollOverflow: true,
    menu: '#header__nav',
    anchors: ['top', 'products', 'benefits', 'specification', 'questions','contacts'],
  });

  $('.menu__btn').on('click', function(){
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.menu__list-link').on('click', function(){
    $('.menu__btn').removeClass('menu__btn--active');
    $('.menu__list').removeClass('menu__list--active');
  });


});
