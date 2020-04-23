$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 600) {
            $('.yukarikaydir').fadeIn();
        } else {
            $('.yukarikaydir').fadeOut();
        }
    });
    $('.yukarikaydir').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});