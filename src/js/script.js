$(document).ready(function(){
    $('.carousel__init').slick({
        slidesToShow: 1,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/icons/left.svg" alt="slide"</button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/icons/right.svg" alt="slide"</button>',
        autoplay: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    dotted: true
                }
            }
        ]
    });
  });