let slider = document.querySelector('.banner-slider');
// let sliderSlide = document.querySelectorAll('.slide');
let sliderBullets = document.querySelectorAll('.bullet');


// let i = 1;
// setInterval(function() {
//     if(i>5){
//         i = 1;
//         slider.style.transform = 'translate(-'+ window.innerWidth*i + 'px)';
//         i = 2;
//     }else{
//         slider.style.transform = 'translate(-'+ window.innerWidth*i + 'px)';
//         i++;
//     }
// }, 1000);

// Слайдер
// sliderBullets.forEach(function(sliderBulletsEl, index){

//     sliderBulletsEl.addEventListener('click', function(){
//         sliderBullets.forEach(function(sliderBulletsActiveEl, index){
//             sliderBulletsActiveEl.classList.remove('active');
//         });
//         this.classList.add('active');
//         slider.style.transform = 'translate(-'+ document.body.clientWidth*index + 'px)';
//         console.log(slider.style.transform);
//     });

// });

let tours = document.querySelector('.tours-line'),
    tour = document.querySelector('.tour');
tours.addEventListener('click', function(){
    if(tours.classList.contains('open')){
        tour.style.display = 'block';
        tours.classList.remove('open');
    }else{
        tour.style.display = 'none';
        tours.classList.add('open');
    }
});

let servs = document.querySelector('.serv-line'),
    serv = document.querySelector('.serv');
servs.addEventListener('click', function(){
    if(servs.classList.contains('open')){
        serv.style.display = 'block';
        servs.classList.remove('open');
    }else{
        serv.style.display = 'none';
        servs.classList.add('open');
    }
});

$('.one-class').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'linear',
    appendDots: $('.bullets')
});

$('.two-class').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
        breakpoint: 1200,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
        }
        },
        {
        breakpoint: 800,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
        }
        }
    ]
});