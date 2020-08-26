$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    easing: "ease",
    infinite: true,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 3000,
    // pauseOnFocus: true,
    // pauseOnHover: true,
    // pauseOnDotsHover: true,
    draggable: true, // Двигать мышкой
    swipe: true, // Свайпать
    touchThreshold: 1, // Расстояние свайпа
    touchMove: true, // Тянуть слайтер при свайпе
    waitForAnimate: false, // Скорость перелистывания кнопкой
    centerMode: false, // Слайд по центру
    variableWidth: false, // Слайд по размеру контента
    rows: 1,
    slidesPerRow: 1,
    vertical: false, // Вертикальный слайдер
    verticalSwiping: false, // Вертикальный свайп
    asNavFor: ".sliderbig",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
    mobileFirst: true,
    appendArrows: $(".arrows-wrap"),
    appendDots: $(".dots-wrap"),
  });

  // Sliderbig

  $(".sliderbig").slick({
    arrows: false,
    fade: true,
    asNavFor: ".slider",
  });
  $(".slider").slick("setPosition"); // Встряхивает слайдер

  var s = $(".slider").slick("slickGetOption", "slidesToShow"); // Выводит в консоль кол-во видимых слайдов
  console.log(s);

  // $(".slider").slick("unslick"); // Сбрасывает слайдер к исходному виду
});
