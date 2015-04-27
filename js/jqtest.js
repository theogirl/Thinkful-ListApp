$(document).ready(function() {

	$('h1')

	.mouseenter(function() {
		$(this).css('color', 'red');
	})
	.mouseleave(function() {
		$(this).css('color', 'blue');
	})
	.click(function() {
		$(this).css('color', 'green');
	})
	

	$('input')

	.keydown(function() {
		$(this).css('background-color', 'yellow');	
	})
	.keydown(function() {
		if (event.which == 13) {
		var value = $(this).val();
		$('.form').html("<li>" + value + "</li>");
		}
	})


	$('button')

	.click(function() {
		$('.form').text("Button was clicked!");
	})
	


});