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
        breakpoint: 480,
        settings: {},
      },
      {
        breakpoint: 768,
        settings: {},
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
          vertical: true,
        },
      },
    ],
    mobileFirst: true,
    appendArrows: $(".arrows-wrap"),
    appendDots: $(".dots-wrap"),
  });
  $(".slider").slick("setPosition");

  // $(".slider").slick("goTo", 3);
  // $(".link").click(function (event) {
  //   $(".slider").slick("goTo", 3);
  // });
});

// arrows: false,
// dots: true,
// adaptiveHeight: true,
// slidesToShow: 1,
// slidesToScroll: 1,
// touchThreshold: 20, // Расстояние свайпа
// draggable: true, // Двигать мышкой

// $(document).ready(function () {
//   $(".slider").slick({
//     arrows: true,
//     dots: true,
//     adaptiveHeight: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     speed: 500,
//     easing: "ease",
//     infinite: true,
//     initialSlide: 0,
//     autoplay: false,
//     autoplaySpeed: 3000,
//     fade: true,
//     // pauseOnFocus: true,
//     // pauseOnHover: true,
//     // pauseOnDotsHover: true,
//     draggable: true, // Двигать мышкой
//     swipe: true, // Свайпать
//     touchThreshold: 20, // Расстояние свайпа
//     touchMove: true, // Тянуть слайтер при свайпе
//     waitForAnimate: false, // Скорость перелистывания кнопкой
//     centerMode: false, // Слайд по центру
//     variableWidth: false, // Слайд по размеру контента
//     rows: 1,
//     slidesPerRow: 1,
//     vertical: true, // Вертикальный слайдер
//     verticalSwiping: true, // Вертикальный свайп
//     // asNavFor: ".sliderbig",
//     responsive: [
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//     ],
//     mobileFirst: true,
//     appendArrows: $(".arrows-wrap"),
//     appendDots: $(".dots-wrap"),
//   });
//   $(".slider").slick("setPosition"); // Встряхивает слайдер

//   // Sliderbig

//   // $(".sliderbig").slick({
//   //   arrows: false,
//   //   fade: true,
//   //   asNavFor: ".slider",
//   // });
//   // $(".slider").slick("setPosition"); // Встряхивает слайдер

//   // var s = $(".slider").slick("slickGetOption", "slidesToShow"); // Выводит в консоль кол-во видимых слайдов
//   // console.log(s);

//   // // $(".slider").slick("unslick"); // Сбрасывает слайдер к исходному виду
// });
