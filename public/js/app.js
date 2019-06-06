$(function() {
    $(window).resize(function() {
        if ($(window).width() > 1000) { // if window is greater than 1000px, change color to purple
            $('body').css({
                background: 'purple'
            })
        } else if ($(window).width() > 700) { // if window greater than 700 but less than 1000, change to gold
            $('body').css({
                background:'gold'
            }) 
        } else {
            $('body').css({ // if window less than 700, change to pink
                background:'pink'
            })
        }
    })
});