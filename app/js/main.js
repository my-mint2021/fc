$(function () {

  // ===================кнопка бургер==================
  $('.burger').on("click", function () {
    $('.burger').toggleClass('burger--active');
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.menu__list').on("click", function () {
    $('.menu__list').removeClass('menu__list--active');
    $('.burger').removeClass('burger--active');
  });

  // ================высплывающее окно===============

  // открытие первого попапа

  $('.btn-js').on("click", function () {
    $('.modal-popup').addClass('modal-popup--active');
    $('.popup-overlay').addClass('popup-overlay--active');
  });

  $('.popup-close').on("click", function () {
    $('.modal-popup').removeClass('modal-popup--active');
    $('.popup-overlay').removeClass('popup-overlay--active');
    $('.modal-small').removeClass('modal-small--active');
  });

  $('.popup-overlay').on("click", function () {
    $('.modal-popup').removeClass('modal-popup--active');
    $('.popup-overlay').removeClass('popup-overlay--active');
  });

  // открытие второго попапа из первого

  $('.popup-form__btn').on("click", function () {
    $('.modal-popup').removeClass('modal-popup--active');
    $('.modal-small').addClass('modal-small--active');
  });

  const element = document.querySelector('.popup-form__select');
  const choices = new Choices(element, {
    searchEnabled: false,
  });

  // табы  

  $('.tabs__link').on("click", function (e) {
    e.preventDefault();
    $('.tabs__link').removeClass('tabs__link--active');
    $(this).addClass('tabs__link--active');
    $('.tabs__box').removeClass('tabs__box--active');
    $($(this).attr('href')).addClass('tabs__box--active');
  });

  $('.tabs__item').on("click", function () {
    $('.tabs__item').removeClass('tabs__item--active');
    $(this).addClass('tabs__item--active');
  });


// первый слайдер
  $('.slider-top__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
  });




});