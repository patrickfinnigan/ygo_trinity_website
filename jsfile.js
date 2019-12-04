$(window).scroll(function () {
    var distanceFromTop = $(this).scrollTop();
    if (distanceFromTop >= $('.img-fluid').height()) {
        var divCardMarginTop = $(".card").css("margin-top");

        $('.sticky').addClass('fixed');
        $('.img-fluid').css('margin-bottom', $('.navbar').height(divCardMarginTop) + 'px');
    } else {
        $('.sticky').removeClass('fixed');
        $('.img-fluid').css('margin-bottom', '0px');
    }
});