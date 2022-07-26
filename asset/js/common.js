$(function(){
    // Mouse Cursor drag
    const circle = $('.cursor').width()/2;

    $('.wrapper').mousemove(function(e){

        // 모션 라이브러리
        $('.cursor').show();
        gsap.to('.cursor',0.8,{
            x: e.clientX - circle,
            y: e.clientY - circle
        })

    });



})