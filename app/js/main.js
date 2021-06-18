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
  // $('.modal-btn').on("click", function () {
  //   $('.modal-popup').addClass('modal-popup--active')
  //   $('.popup-overlay').addClass('popup-overlay--active')
  // });

  // $('.popup-close').on("click", function () {
  //   $('.modal-popup').removeClass('modal-popup--active');
  //   $('.popup-overlay').removeClass('popup-overlay--active');
  // });

  // $('.popup-overlay').on("click", function () {
  //   $('.modal-popup').removeClass('modal-popup--active');
  //   $('.popup-overlay').removeClass('popup-overlay--active');
  // });




  $('.btn-js').on("click", function () {
    $('.modal-popup').addClass('modal-popup--active')
    $('.popup-overlay').addClass('popup-overlay--active')
  });

  $('.popup-close').on("click", function () {
    $('.modal-popup').removeClass('modal-popup--active');
    $('.popup-overlay').removeClass('popup-overlay--active');
  });

  $('.popup-overlay').on("click", function () {
    $('.modal-popup').removeClass('modal-popup--active');
    $('.popup-overlay').removeClass('popup-overlay--active');
  });




  const element = document.querySelector('.popup-form__select');
  const choices = new Choices(element, {
    searchEnabled: false,
  });


});