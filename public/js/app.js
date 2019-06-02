$(function() {
    $(window).resize(function() {
        if ($(window).width() > 1000) {
            $('body').css({
                background: 'purple'
            })
        } else if ($(window).width() > 700) {
            $('body').css({
                background:'gold'
            }) 
        } else {
            $('body').css({
                background:'pink'
            })
        }
    })
});