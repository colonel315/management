/**
 * Created by Trey on 4/2/2015.
 */
$(document).ready(function () {
    var sidenav = $('.affix-top');
    var sidenavDifference = sidenav.offset().top;

    var didScroll = false;

    $(window).scroll(function () {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            didScroll = false;

            if ($(window).scrollTop() >= sidenavDifference) {
                sidenav.removeClass('affix-top');
                sidenav.addClass('affix');
            }
            else {
                sidenav.removeClass('affix');
                sidenav.addClass('affix-top');
            }
        }
    }, 1);
});