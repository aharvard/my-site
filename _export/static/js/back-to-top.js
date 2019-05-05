$(window).scroll(function() {
    if ($(this).scrollTop() >= 700) {        // If page is scrolled more than 500px
        $('#return-to-top').fadeIn(1);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(1);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});