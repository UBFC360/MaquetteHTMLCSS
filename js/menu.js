$(document).ready( function() {
    $('.barres').click(function(e){
        $('nav').toggleClass('hidden');
        $('body').toggleClass('hidden');
        $('.menucache ul').hide(0).delay(300).show(200);
        $('.menucache li').hide(0).delay(500).show(200);
        e.stopPropagation();
    })
});