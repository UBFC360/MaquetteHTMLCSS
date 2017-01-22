$(document).ready(function () {

    $('body').addClass('hidden');
    $('.champs input').addClass('cache');

    $('.barres').click(function (e) {
        $('nav').toggleClass('hidden');
        $('body').toggleClass('hidden');
        $('.menucache ul').hide(0).delay(300).show(200);
        $('.menucache li').hide(0).delay(500).show(200);
        e.stopPropagation();
    })

    $('.champs .fa-search').click(function () {
        if ($('.champs input').hasClass('cache') == true) {
            $('.champs input').removeClass('cache');
        }
    })
});