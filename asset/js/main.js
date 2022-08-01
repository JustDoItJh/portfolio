$(function(){

  Splitting();


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



  const dataSample = { // 차트에 들어갈 데이터
    labels: [
        'HTML','CSS','JS','작업 속도','웹 접근성','GSAP','GITHUB'
    ],
    datasets: [
        { //데이터
            fill: true, // line 형태일 때, 선 안쪽을 채우는지 안채우는지
            data: [
                0,0,0,0,0,0,0 //x축 label에 대응되는 데이터 값
            ],
            backgroundColor: [
                //색상
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
                //경계선 색상
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 5 //경계선 굵기
        },
    ]
  }



  var context = document
  .getElementById('myChart')
  .getContext('2d');
  var myChart = new Chart(context, {
    type: 'radar', // 차트의 형태
    data: dataSample,
    options: {
      legend: {
        display: false
      },
      responsive: true,
      scale: {
        ticks: {
          beginAtZero: true,
          max: 100,
          min: 0,
          stepSize:20,
          backdropColor: 'black',
          fontSize: 13,
          fontFamily:"Pretendard"
        },
        gridLines: {
          color: 'rgba(255,255,255,0.1)'
        },
        angleLines: {
          color: 'rgba(255,255,255,0.1)'
        },
        pointLabels:{
          fontColor: '#fff',
          fontSize: 20,
          fontFamily: "Pretendard"
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Chart.js Radar Chart'
        },
        chartAreaBorder: {
          borderColor: 'red',
          borderWidth: 2,
          borderDash: [5, 5],
          borderDashOffset: 2,
        }
      }
    },
  });



  dataArr = [
    [30,25,10,10,20,0,0], // data-edu 0
    [60,50,30,50,40,10,30], // data-edu 1
    [90,85,65,70,70,60,70]  // data-edu 2
  ]

  $('.edu-area a').click(function(e){
    e.preventDefault();
    const dataValue = $(this).data('edu'); // data-edu를 통해 데이터 연결

    $('.edu-area a').removeClass('active')
    $(this).addClass('active')

    myChart.data.datasets[0].data = dataArr[dataValue];
    myChart.update();
  })




  const menu = gsap.timeline({  // 시간 순서대로 하나씩 이벤트 발생
    paused:true, // 시작부터 일시정지
  })
  menu.to('.head .menu-area', {opacity:1})
  .fromTo('.head .menu-item',
  {xPercent:-10, opacity:0},
  {xPercent:0, opacity:1, stagger:0.1}
  )
  .to('.head .menu-item .link-menu', 0.3, {scale:1.2})

  $('.btn-menu').click(function(){

    if($('.head .btn-menu').text() == 'CLOSE'){
      $('.head .btn-menu').text('MENU')
      menu.reverse()
    } else {
      gsap.set('.head .menu-area', {display:'flex'})
      $('.head .btn-menu').text('CLOSE')
      menu.restart()
    }

    

  })



  // 스크롤로 영역 진입 시 배경색 전환
  ScrollTrigger.create({
    trigger:".sc-description",
    start:"top 50%",
    markers: true,
    onEnter:() => {
      $('body').addClass('white')
    },
    onLeaveBack:() => {
      $('body').removeClass('white')
    }
  })

  ScrollTrigger.create({
    trigger:".sc-edu",
    start:"top 50%",
    markers: true,
    onEnter:() => {
      $('body').removeClass('white')
    },
    onLeaveBack:() => {
      $('body').addClass('white')
    }
  })

  ScrollTrigger.create({
    trigger:".sc-attitude",
    start:"top 50%",
    markers: true,
    onEnter:() => {
      $('body').addClass('white')
    },
    onLeave:() => {
      $('body').removeClass('white')
    }
  })

  

  // const change = gsap.timeline({
  //   default:{
  //     delay:0.3 // 애니메이션 지연
  //   },
  //   ScrollTrigger:{
  //     trigger:".sc-description",
  //     start:"top top",
  //     end:".sc-edu", //
  //     markers:true,
  //     scrub:0.5,
  //     onLeave:() => {
  //       $('body').removeClass('black')
  //     }
  //   }
  // })


  const scrollMotion =document.querySelectorAll('[data-name*="motion"]')
  scrollMotion.forEach(a => {

    motion = gsap.from(a, {
      opacity: 1,
      y: 100,
      stagger: 0.1
    })

    // 특정 영역에서 트리거
    ScrollTrigger.create({
      trigger: a,
      start: "top 50%",
      end: "bottom top",
      makers: true,
      animatioin: motion
    })
  })

})

