// jQuery(document).ready(function(){								// $(function() {} - Simpler way of writing the same function.
// 	alert('Hey, the jQuery is working.');
// });



$(function() {

	// By id - this adds a css class.
	$('#example-one').addClass('highlight'); 						// id meaning #

	// By class - we'll mae two things change here.
	$('.example-two').css('border','4px solid gray');   			// class meaning .

	// By element
	$('h5').click(function(){
		$('h5').fadeOut('slow', 'linear');
	});

	// https://jqueryui.com/draggable/
	// $('#draggable').draggable();

	$('#id-combo-demo, .class-combo-demo, #draggable').draggable();

	$('li:contains("sad")').click(function() {
		$(this).hide()
	});
	
});
