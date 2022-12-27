$(function () {

    "use strict";

    
     // =====Closes responsive menu when a scroll link is clicked===== //

     $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });


    // ======Smooth Scroll===== //

    // $('a[href*="#"]')
    //     .not('[href="#"]')
    //     .not('[href="#0"]')
    //     .click(function (event) {
    //         if (
    //             location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
    //             location.hostname == this.hostname
    //         ) {
    //             var target = $(this.hash);
    //             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //             if (target.length) {
    //                 event.preventDefault();
    //                 $('html, body').animate({
    //                     scrollTop: target.offset().top
    //                 }, 1000, function () {
    //                     var $target = $(target);
    //                     $target.focus();
    //                     if ($target.is(":focus")) {
    //                         return false;
    //                     } else {
    //                         $target.attr('tabindex', '-1');
    //                         $target.focus();
    //                     };
    //                 });
    //             }
    //         }
    //     });

  
    // ======Slick Slider===== //

//     $('.').slick({
//         dots: false,
//         infinite: true,
//         autoplay: true,
//         arrows: false,
//         autoplaySpeed: 1000,
//         speed: 1300,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                 }
//     }, {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 }
//     }
//   ]

//     });




    // =====scroll top===== //


    // $(".scroll_top").on('click', function () {
    //     $("html,body").animate({
    //         scrollTop: 0,
    //     }, 800);
    // });
    // $(window).on('scroll', function () {
    //     var scrolling = $(this).scrollTop();

    //     if (scrolling > 200) {
    //         $(".scroll_top").fadeIn();
    //     } else {
    //         $(".scroll_top").fadeOut();
    //     }
    // });



    // =====Aos Js===== n//

    AOS.init();



});


$(document).ready(function(){

    let selectForm = false;
    let personal_use = document.getElementById('personal_use');
    let business_use = document.getElementById('business_use');
    let continue_button = document.getElementById('continue_button');
    let anchor_button = document.getElementById("set_link");
   
    $(personal_use).click(function(){
        $(this).toggleClass('active_form')
        $('#business_use').removeClass('active_form')
        $(continue_button).toggleClass('active_button')
        if(personal_use.classList.contains('active_form')){
            selectForm =true
            $(continue_button).addClass('active_button')
            anchor_button.href = './form_one.html';
        }else{
            selectForm = false
            $(continue_button).removeClass('active_button')
        }

    })
    $(business_use).click(function(){
        $(this).toggleClass('active_form')
        $('#personal_use').removeClass('active_form')
   

        if(business_use.classList.contains('active_form')){
            selectForm =true
            $(continue_button).addClass('active_button')
            anchor_button.href = './form_two.html';
        }else{
            selectForm = false
            $(continue_button).removeClass('active_button')

        }

    })




});
