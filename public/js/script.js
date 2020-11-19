$(function () {
  $('.excursions-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="../images/icons/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="../images/icons/arrow-next.svg" alt=""></button>',
    responsive: [{
        breakpoint: 1365,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          arrows: false,
          dots: true,
        }
      }
    ]
  });

  $('.cars-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="../images/icons/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="../images/icons/arrow-next.svg" alt=""></button>',
    responsive: [{
        breakpoint: 1365,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          arrows: false,
          dots: true,
        }
      }
    ]
  });


  $('.reviews-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="../images/icons/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="../images/icons/arrow-next.svg" alt=""></button>',
    autoplay: true,
    speed: 1000,
    fade: true,
    responsive: [
    {
      breakpoint: 426,
      settings: {
        centerMode: true,
        arrows: false,
      }
    }
  ]
  });

  $('#fullpage').fullpage({
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    sectionSelector: '.page-section',
    scrollOverflow: false,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    scrollingSpeed: 700,
    scrollOverflow: true,
    menu: '#header__nav',
    anchors: ['top', 'excursions', 'cars', 'boats', 'benefits', 'reviews', 'contacts'],
  });

  $('.menu__btn').on('click', function () {
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.menu__list-link').on('click', function () {
    $('.menu__btn').removeClass('menu__btn--active');
    $('.menu__list').removeClass('menu__list--active');
  });

  $('.about__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="../images/icons/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="../images/icons/arrow-next.svg" alt=""></button>',
    autoplay: true,
    fade: true,
    responsive: [{
      breakpoint: 601,
      settings: {
        arrows: false
      }
    }]
  });

});
