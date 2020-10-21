$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    easing: "ease",
    infinite: false,
    autoplay: false,
    autoplaySpeed: 3000,
    focusOnSelect: false,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    draggable: false,
    swipe: true,
    touchThreshold: 15,
    touchMove: true,
    waitForAnimate: true,
    centerMode: false,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 479,
        settings: {
          arrows: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
        },
      },
    ],
    mobileFirst: true,
    appendArrows: $(".arrows-wrap"),
    appendDots: $(".dots-wrap"),
  });
  $(".slider").slick("setPosition"); // встряхивание слайдера
});
