$(function(){

  var swiper = new Swiper(".swiperBar", {
      // 하단 스크롤바 생성
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },

      // 동시 다중 슬라이드 중앙정렬
      slidesPerView: 1.5,
      centeredSlides: false,
      spaceBetween: 0,
      grabCursor: true,
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },

  });

  var swiper = new Swiper(".swiperFade", {
    // 슬라이드 효과
    spaceBetween: 100,
    loop: true,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

})

