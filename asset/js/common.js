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


    $(function () {
            
        var $typing = $("#typing");

        // #typing 요소의 내부 문자를 읽어온다.
        var text = $typing.text();

        // #typing 요소의 내부 문자 제거
        $typing.html("");

        // #typing 요소의 내부 문자를 한 글자씩 잘라 배열에 저장
        // → String 객체의 split 메서드
        var chars = text.split("");

        // 배열 chars의 각 문자들을 내부 문자로 갖는 span 요소를 생성해 #typing 요소에 추가
        // → Array 객체의 forEach 메서드
        chars.forEach(function (item) {
            // 문자가 빈칸인 경우에는 HTML 엔티티로 변환
            item = (item == " ") ? "&nbsp" : item;

            $("<span></span>").html(item).appendTo($typing);
        });

        // 캐럿 추가
        var $caret = $("<span></span>").attr("id", "caret").css({
            width: "0.4em",
        }).appendTo($typing);

        // 글자를 표시하기 전의 지연 시간(ms)
        var delayStart = 1500;

        // 타이핑 속도(ms)
        var speed = 150;

        // 글자들을 보이지 않게 설정한 다음 한 글자씩 화면에 표시
        $typing.children(":not(#caret)").hide().each(function (index) {
            var delay = delayStart + speed * index;

            $(this).delay(delay).show(10);
        });
    });
})