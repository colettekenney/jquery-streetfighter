$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})

	.mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function(){
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
			.animate(
				{'left': '1041px'},
				500,
				function() {
					$(this).hide();
					$(this).css('left', '541px');
				});
	})
	.mouseup(function(){
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	})

	$('html').keydown(function(e) {
			if(e.which == 88) {
				//alert ("X Pressed");
				$('.ryu-still, .ryu-ready, .ryu-throwing').hide();
				$('.ryu-cool').show();
			}
	})
	$('html').keyup(function() {
		//alert("Handler for .keyup() called.");
		$('.ryu-cool').hide();
		$('.ryu-still').show();
	});
});


function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}
