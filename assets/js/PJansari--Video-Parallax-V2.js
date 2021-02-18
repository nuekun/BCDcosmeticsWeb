$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    // set this you when you want to stop video, may have to do some trial and error
    var scroll_pos_test = 150;             

    if(y_scroll_pos > scroll_pos_test) {
        $('video').trigger('pause');
    }else{
        $('video').trigger('play');
    }
});