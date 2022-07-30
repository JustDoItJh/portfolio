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
  
  

})