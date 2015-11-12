$(document).ready(function () {
    if ($(window).width() <= 1000) {
        $('#myAffix').addClass('relative');
    } else {
        $('#myAffix').removeClass('relative');
    }
    
    $(window).scroll(function () {
        if ($(window).width() <= 1000) {
            $('#myAffix').addClass('relative');
        } else {
            $('#myAffix').removeClass('relative');
        }
    });

    $('#collapse1').click(function () {
        $(this).toggleClass('selected');
    });

    $('#collapse2').click(function () {
        $(this).toggleClass('selected');
    });
});