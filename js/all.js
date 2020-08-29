$(document).ready(function () {
    $('.nav-btn').on('click', function (event) {
        event.preventDefault();
        $('body').toggleClass('active');
    });
    $('.nav li a').on('click', function (event) {
        $('body').removeClass('active');
    });
});