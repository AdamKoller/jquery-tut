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

// event objects
    // we have an anchor link in the html in box-1(top/bottom.html) that will send the page somewwhere. how do we stop that??
    // us eventPreventDefault
$(function() {
    $('.box-1 a').on('click',function(event) {
        event.preventDefault()
        $('.box-3').css({
            background:'brown'
        })
    })

    $('.box-2').on('click',function(){
        $('.box-3').css({
            background:'lightblue'
        })
    })

    $('.button').on('click',function(event){
        event.stopPropagation() //stopProgagation allows events to be passed within the parent div otherwise box 3 would still be lightblue even if the button was clicked.
        $('.box-3').css({
            background:'darkblue'
        })
    })
});