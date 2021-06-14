$(function () {




  $('.modal-btn').on("click", function () {
 
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









});