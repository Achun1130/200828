$(document).ready(function () {
    $('.nav-btn').on('click', function (event) {
        event.preventDefault();
        $('body').toggleClass('active');
    });
});