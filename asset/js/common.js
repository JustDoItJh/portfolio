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

    });


    

        // const link = document.querySelectorAll('.mouse-hover');
        // const cursor = document.querySelector('.cursor');
  
        // const animateit = function (e) {
        //       const a = this.querySelector('a');
        //       const { offsetX: x, offsetY: y } = e,
        //       { offsetWidth: width, offsetHeight: height } = this,
  
        //       move = 25,
        //       xMove = x / width * (move * 2) - move,
        //       yMove = y / height * (move * 2) - move;
  
        //       a.style.transform = `translate(${xMove}px, ${yMove}px)`;
  
        //       if (e.type === 'mouseleave') a.style.transform = '';
        // };
  
        // const editCursor = e => {
        //       const { clientX: x, clientY: y } = e;
        //       cursor.style.left = x + 'px';
        //       cursor.style.top = y + 'px';
        // };
  
        // link.forEach(b => b.addEventListener('mousemove', animateit));
        // link.forEach(b => b.addEventListener('mouseleave', animateit));
        // window.addEventListener('mousemove', editCursor);
  
    
    
        const scrollMotion = document.querySelectorAll('[data-name*="upmotion"]')
        scrollMotion.forEach(element => {

          yVal = (element.dataset.y) ? element.dataset.y : 0;
          xVal = (element.dataset.x) ? element.dataset.x : 0;
          
          upmotion = gsap.timeline(element);

          upmotion = gsap.from(element,{
            opacity: 0,
            yPercent: yVal,
            xPercent: xVal,
            duration: 2
          })
      
          // 특정 영역에서 트리거
          ScrollTrigger.create({
            trigger: element,
            start: "top 50%",
            end: "bottom top",
            makers: true,
            animatioin: upmotion,
            toggleActions: "restart none none reset"
          })
        })

})