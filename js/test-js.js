$(document).ready (function() {
	$('.append').children().append("... has been appended!");
	$('.prepend').children().prepend("I am prepending ");

	$('input')
		.keydown(function() {
		//if (event.which == 13 )//if the user presses the Enter key after they input text in the field
		//var value = $(this).val();//(declares a variable called "value" which is defined as the current value of the "this" element, which in this case is the "input" element)
    	//$('.output').html( "<li>" + value + "</li>");//then display the text (now known as the variable defined above as "value") in the selected DOM element, which is the div with class = "output"
    	});

	$('button')
		.click(function() {
		var value = $('input').val();
    	$('ul.list').html( "<li>" + value + "</li>");
		});


});