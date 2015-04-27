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
		$('.form ul').append("<li>" + value + "</li>" );

		}
	})


	$('.btn-enter')

	.click(function() {
		var value = $('input').val();
		$('.form ul').append("<li>" + value + "</li>");
	})

	$('.btn-reset')

	.click(function() {
		$('.form ul').children().remove();
	})
	


});