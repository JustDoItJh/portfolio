$(function(){
    gsap.registerPlugin(ScrollTrigger);


    // Mouse Cursor drag
    const circle = $('.cursor').width()/2;

    $('.wrapper').mousemove(function(e){

        // 모션 라이브러리
        $('.cursor').show();
        gsap.to('.cursor',0.8,{
            x: e.clientX - circle,
            y: e.clientY - circle
        })
        
        // 오버 효과
        $('.swiper-slide').hover(function(){
            $('.cursor').addClass('active');
        }, function(){
            $('.cursor').removeClass('active');
        });
    });


    
    // Typing 효과 js
    var options = {
        strings: ['Publ', 'I Want T', 'Be Publisher!'],
        typeSpeed: 40,
        backSpeed: 100,
        fadeOut: false,
        smartBackspace: true,
        cursorChar: '____',
        loop: true,
        backdelay: 700
    };

    var typed = new Typed('#typing', options);
  
})