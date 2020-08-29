$(document).ready(function () {
    $('.nav-btn').on('click', function (event) {
        event.preventDefault();
        $('body').toggleClass('active');
    });
    $(".nav li a[href^='#']").on('click', function (event) {
        event.preventDefault();
        $('body').removeClass('active');
    });
    
    $(".nav li a[href^='#']").on('click', function (event) {
        event.preventDefault();
        var href = $(this).attr('href');
        console.log(href);
        $('html,body').animate({
            scrollTop: $(href).offset().top-52
        },1000);
    });
});