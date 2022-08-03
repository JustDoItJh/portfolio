$(function(){
    gsap.registerPlugin(ScrollTrigger);


    // Mouse Cursor drag
    // const circle = $('.cursor').width()/2;

    // $('.wrapper').mousemove(function(e){

    //     // 모션 라이브러리
    //     $('.cursor').show();
    //     gsap.to('.cursor',0.8,{
    //         x: e.clientX - circle,
    //         y: e.clientY - circle
    //     })
        
    //     // 오버 효과
    //     $('.swiper-slide').hover(function(){
    //         $('.cursor').addClass('active');
    //     }, function(){
    //         $('.cursor').removeClass('active');
    //     });
    // });


    // 마우스 움직이기
    const circle = $('.cursor').width()/2;

    $('.wrapper').mousemove(function(e){
        
        $('.cursor').show();
            gsap.to('.cursor',0.8,{
            x: e.clientX - circle,
            y: e.clientY - circle
        })
        // 마우스 오버 효과
        // $(".link-line").hover(function(){
        //     $(".cursor").addClass("hover");
        // }, function(){
        //     $(".cursor").removeClass("hover");
        // });
    });

    
    


})