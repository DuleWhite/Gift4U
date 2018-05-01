$(function() {
    // .slick
    var slick = $('.slick');
    if ($(window).width() < 900) {
        slick.not('.slick-initialized').slick({
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1
        });
        slick.width(260);
    } else {
        slick.width(900);
        slick.not('.slick-initialized').slick({
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1
        });
    }

    // .faq img
    var faq_img = $(".faq img");
    if ($(window).width() < 640) {
        faq_img.width($(window).width()-40)
    } else { faq_img.width(640); }

    // .aboutus .cd-fixed-bg
    var fixed_bg = $('.aboutus .cd-fixed-bg');
    var fixed_bg_height = fixed_bg.height();
    $(window).on('scroll', function() {
        var scrollTop = Math.floor(($(window).scrollTop()-fixed_bg.offset().top)/2);
        // console.log(scrollTop);
        fixed_bg.css('background-position', '50% ' + scrollTop + 'px');
    });

    // .aboutus .cd-fixed-bg .rect
    var rect = $(".aboutus .cd-fixed-bg .rect");
    if ($(window).width() < 940) {
        rect.width(0.53 * $(window).width())
    } else { rect.width(500); }
    rect.css("left", (($(window).width() - rect.width()) / 2) + "px")
});
$(window).resize(function() {
    // .slick
    var slick = $('.slick');
    if ($(window).width() < 900) {
        slick.slick("unslick");
        slick.not('.slick-initialized').slick({
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1
        });
        slick.width(260);
    } else {
        slick.width(900);
        slick.slick("unslick");
        slick.not('.slick-initialized').slick({
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1
        });
    }

    // .faq img
    var faq_img = $(".faq img");
    if ($(window).width() < 640) {
        faq_img.width($(window).width()-40)
    } else { faq_img.width(640); }

    // .aboutus .cd-fixed-bg .rect
    var rect = $(".aboutus .cd-fixed-bg .rect");
    if ($(window).width() < 940) {
        rect.width(0.53 * $(window).width())
    } else { rect.width(500); }
    rect.css("left", (($(window).width() - rect.width()) / 2) + "px");
});