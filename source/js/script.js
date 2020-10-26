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


  $('.products__slider').slick({
    prevArrow: '<button class="slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"/></svg></button>',
    nextArrow: '<button class="slider-btn slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"/></svg></button>',
    infinite: false,
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
