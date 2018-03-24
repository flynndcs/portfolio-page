
$('#about-button').click(function() {
	$('html, body').animate({
		scrollTop: $('#about-section').offset().top
	}, 2000);
});

$('#skills-button').click(function() {
	$('html, body').animate({
		scrollTop: $('#skills-section').offset().top
	}, 2000);
});
$('#contact-button').click(function() {
	$('html, body').animate({
		scrollTop: $('#contact-section').offset().top
	}, 2000);
});

// $("#about-button").click(function() {
// 	console.log("clicked");
// });
