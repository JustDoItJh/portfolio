var swiper = new Swiper(".mySwiper", {
    // 하단 스크롤바 생성
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },

    // 동시 다중 슬라이드 중앙정렬
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // 슬라이드 효과
    effect: "fade",
});