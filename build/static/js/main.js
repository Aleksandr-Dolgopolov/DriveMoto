$(function () {

  $('.banner-section__slider').slick({
    dots: true,
    prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btn--prev"><img src="static/images/content/left.svg" alt=""></button>',
    nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btn--next"><img src="static/images/content/right.svg" alt=""></button>',
    responsive: [{
      breakpoint: 969,
      settings: {
        arrows: false
      }
    }]
  });

  $('.tab').on('click', function (e) {
    e.preventDefault();
    $($(this).siblings()).removeClass('tab--active');
    $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');

    $('.product-slider').slick('setPosition');
  });

  $('.product-item__favorite').on('click', function () {
    $('.product-item__favorite').toggleClass('product-item__favorite--active');
  });

  $('.product-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btn--prev"><img src="static/images/content/left-black.svg" alt=""></button>',
    nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btn--next"><img src="static/images/content/right-black.svg" alt=""></button>',
    responsive: [{
        breakpoint: 1301,
        settings: {
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 1201,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 871,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 591,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1
        }
      }
    ]
  });

  $('.filter-style').styler();

  $('.filter__item-drop, .filter__extra').on('click', function () {
    $(this).toggleClass('filter__item-drop--active');
    $(this).next().slideToggle(300);
  });

  $(".js-range-slider").ionRangeSlider({
    hide_from_to: true,
  });

  $('.filter-btn__grid').on('click', function () {
    $(this).addClass('filter-button--active');
    $('.filter-btn__line').removeClass('filter-button--active');
    $('.product-item__wrapper').removeClass('product-item__wrapper--list');
  });

  $('.filter-btn__line').on('click', function () {
    $(this).addClass('filter-button--active');
    $('.filter-btn__grid').removeClass('filter-button--active');
    $('.product-item__wrapper').addClass('product-item__wrapper--list');
  });

  $(".rate-yo").rateYo({
    ratedFill: "#1C62CD",
    normalFill: "#C4C4C4",
    spacing: "10px"
  });

  $('.main-menu__btn').on('click', function () {
    $('.menu-mobile__list').toggleClass('menu-mobile__list--active');
  });

  $('.page-footer__topdrop').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('page-footer__topdrop--active');
  });

  $('.acide__btn').on('click', function () {
    $(this).next().slideToggle();
  });

});