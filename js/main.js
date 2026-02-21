$(document).ready(function(){

    // Blog Carousel
    $('.blog-carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 800,
        responsive:{
            0:{ items:1 },
            576:{ items:2 },
            992:{ items:4 }
        }
    });


    // Product Carousel
    $('.product-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2500,
        smartSpeed: 800,
        responsive:{
            0:{ items:1 },
            576:{ items:2 },
            768:{ items:3 },
            992:{ items:5 }
        }
    });
        $('.products1-carousel').owlCarousel({
        loop: false,
        margin: 20,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2500,
        smartSpeed: 800,
        responsive:{
            0:{ items:1 },
            576:{ items:2 },
            768:{ items:3 },
            992:{ items:5 }
        }
    });


    // Products1 Carousel
    $('.products1 .owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive:{
            0:{ items:1 },
            576:{ items:2 },
            768:{ items:3 },
            992:{ items:6 }
        }
    });


    // Product1 Carousel
    $('.product1-carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 800,
        responsive:{
            0:{ items:1 },
            576:{ items:2 },
            992:{ items:3 }
        }
    });

});
