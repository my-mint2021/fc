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


});