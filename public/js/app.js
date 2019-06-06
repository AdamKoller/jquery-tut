// browsder events
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

// event handler
$(function() {
    $('.box-1').on('click',function() { // change background color to red if clicked
        $('.box-1').css({
            background:'red'
        })
    })
});

$('.box-2').on({
    click:function() {
        $('.box-2').css({
            background:'orange'
        })
    },mouseenter:function() {
        $('.box-2').css({
            background:'blue'
        })
    },mouseleave:function() {
        $('.box-2').css({
            background:'green'
        })
    }                                                                                          
});