$(document).ready(function () {
    $('.slidecontent').hide().first().show();
    var click = 0; //this variable will store the number of clicks user clicked

    $('.btn').click(function () {
        console.log('clicked');
        //for zero and even clicks
        if (click % 2 == 0 || click == 0) {  f
            $('.slidecontent').hide();
            $(this).find('i').removeClass('fa-circle-right').addClass('fa-circle-down');
            $(this).parent().siblings().find('.btn i').removeClass('fa-circle-right').removeClass('fa-circle-down').addClass('fa-circle-right');
            $(this).siblings('p').show();
        }
 
        //for odd clicks
        else {
            // Second click
            $(this).find('i').removeClass('fa-circle-down').addClass('fa-circle-right');
            $(this).siblings('p').hide();
        }
        ++click;
    });
});