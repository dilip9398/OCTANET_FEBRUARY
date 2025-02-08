$(document).ready(function () {
    $(window).on('scroll load', function () {
        if ($(window).scrollTop() > 60) {
            $('.header').addClass('active');
        } else {
            $('.header').removeClass('active');
        }
    });
});