let tours = document.querySelector('.tours-line'),
    tour = document.querySelector('.tour');
tours.addEventListener('click', function(){
    if(tours.classList.contains('open')){
        tour.style.display = 'none';
        tours.classList.remove('open');
    }else{
        tour.style.display = 'block';
        tours.classList.add('open');
    }
});

let servs = document.querySelector('.serv-line'),
    serv = document.querySelector('.serv');
servs.addEventListener('click', function(){
    if(servs.classList.contains('open')){
        serv.style.display = 'none';
        servs.classList.remove('open');
    }else{
        serv.style.display = 'block';
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
        breakpoint: 1800,
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

let width = $(window).width();
if(width<=1200){
    tour.style.display = 'none';
    tours.classList.remove('open');
    serv.style.display = 'none';
    servs.classList.remove('open');
}

// Бургер
let sectionMenuNav = document.querySelector('nav');
let burger = document.querySelector('.burger-button');

burger.addEventListener('click', function(){
    if(this.classList.contains('open')){
        this.classList.remove('open');
        sectionMenuNav.style.display = 'none';
        // sectionMenuNav.classList.remove('anim');
    }else{
        this.classList.add('open');
        sectionMenuNav.style.display = 'flex';
        // sectionMenuNav.classList.add('anim');
    }
});