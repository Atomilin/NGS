//****************************Функция навигации**************************************//
$(document).ready(function () {
    var sectionIndex = 0;

    $('.nav__link, .fixed-menu__link').on('click', function (e) {
        e.preventDefault();
        showSection($(this).attr('href'), true);
        sectionIndex = $(this).attr('href').replace(/#/, '');
        $('.fixed-menu__item').eq(sectionIndex-1).addClass('active').siblings().removeClass('active');
    });

    $('.menu-phone__link').on('click', function (e) {
        e.preventDefault();
        showSection($(this).attr('href'), true);
        sectionIndex = $(this).attr('href').replace(/#/, '');
        $('.menu-phone').css("display", "none");
    });

    showSection(window.location.hash, false);
});

function showSection(section, isAnimate) {
    var
        direction = section.replace(/#/, ''),
        reqSection = $('.section').filter('[data-section="' + direction + '"]'),
        reqSectionPos = (reqSection.offset() || {
            "top": NaN
        }).top;
    if (isNaN(top)) {
        if (isAnimate) {
            $('body, html').animate({
                scrollTop: reqSectionPos
            }, 500);
        } else {
            $('body, html').scrollTop(reqSectionPos);
        }
    }
}

function showSec(section, isAnimate) {
    var
        reqSec = $('.section').filter('[data-section="' + section + '"]'),
        reqSecPos = (reqSec.offset() || {
            "top": NaN
        }).top;

    if (isNaN(top)) {
        if (isAnimate) {
            $('body, html').animate({
                scrollTop: reqSecPos
            });
        } else {
            $('body, html').scrollTop(reqSecPos);
        }
    }
}