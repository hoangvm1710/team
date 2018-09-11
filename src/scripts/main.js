// Main
$(document).ready(function() {
    // Phần Slider
    $('.maykhoan-slider .owl-carousel').owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    });
    // Phần Clients
    $('.maykhoan-show .owl-carousel ').owlCarousel({
        items: 6,
        nav: false,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        responsive: {
            // breakpoint from 480 up
            360: {
                items: 4,
            },
            // breakpoint from 768 up
            768: {
                items: 4,
            },
            // breakpoint from 992 up
            992: {
                items: 6,
                nav: true,
            }
        }
    });
});