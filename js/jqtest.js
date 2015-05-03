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

	//.keydown(function() {
	//	$(this).css('background-color', 'yellow');	
	//})

	.keydown(function(event) {
		if (event.which == 13) {
		var value = $(this).val();

		if (value == '') {
			alert('Please enter a list item!');
		}
		else {
		$('.form ul').append("<li class='todos'>" + "<button>Not Done</button>" + ' ' + value + "<div class='delete'>Delete Me</div>" + "</li>");
		$(this).val(''); //passes an empty string to input field
		$(this).focus(); //returns the focus to this field
		}
	}
	})

// Submit button next to input field

	$('.btn-enter')

	.click(function() {
		var value = $('input').val();

		if (value == '') {
			alert('Please enter a list item!');
		}

		else {
		$('.form ul').append("<li class='todos'>" + "<button>Not Done</button>" + ' ' + value + "<div class='delete'>Delete Me</div>" + "</li>");
		$('input').val(''); //passes an empty string to input field
		$('input').focus(); //returns the focus to this field
		}
	})

// Button to check item as done


	$('ul').on('click', 'button', function() {

		if ($(this).hasClass('done')) {
			$(this).parent('.todos').css('text-decoration', 'none');
			$(this).css('background-color', 'red');
			$(this).text('Not Done');
			$(this).removeClass('done');
		}

		else {
		$(this).parent('.todos').css('text-decoration', 'line-through');
		$(this).css('background-color', 'green');
		$(this).text('Done');
		$(this).addClass('done');
		}

		}) // end on click of Done button

// Delete list item button

	$('ul').on('click', '.delete', function() {
		$(this).parent().remove();
	}) // end delete list item


// Button to reset or clear whole list

	$('.btn-reset')

	.click(function() {
		$('.form ul').children().remove();
	}) // end reset
	


});