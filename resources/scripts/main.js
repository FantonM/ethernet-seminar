$('body').append('<a href="#" class="back-to-top"></a>');
var amountScrolled = 200;

/* back to top button */
$(window).scroll(function() {
	if ($(window).scrollTop() > amountScrolled) {
		$('a.back-to-top').fadeIn('slow');
	}
	else {
		$('a.back-to-top').fadeOut('slow');
	}
});

$('a.back-to-top').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 250);
	return false;
});