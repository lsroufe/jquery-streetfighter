$(document).ready(function() {
	$('.ryu')
		.mouseenter(function() {
			$('.ryu-still').hide();
			$('.ryu-ready').show();
		})
		.mouseleave(function() {
			$('.ryu-ready').hide();
			$('.ryu-still').show();
		})
		.mousedown(function() {
			playHadouken();
			$('.ryu-ready').hide();
			$('.ryu-throwing').show();
			$('.hadouken')
				.finish()
				.show()
				.animate(
					{'left': '1020px'},
					500,
					function() {
						$(this).hide();
						$(this).css('left', '520px');
					});
		})
		.mouseup(function() {
			$('.ryu-throwing').hide();
			$('.ryu-ready').show();
		});
	$('.hulk-ryu')
		.mouseenter(function() {
			$('.hulk-ryu-still').hide();
			$('.hulk-ryu-ready').show();
		})
		.mouseleave(function() {
			$('.hulk-ryu-ready').hide();
			$('.hulk-ryu-still').show();
		})
		.mousedown(function() {
			playHadouken();
			$('.hulk-ryu-ready').hide();
			$('.hulk-ryu-throwing').show();
			$('.hulk-hadouken')
				.finish()
				.show()
				.animate(
					{'left': '1020px'},
					500,
					function() {
						$(this).hide();
						$(this).css('left', '520px');
					});
		})
		.mouseup(function() {
			$('.hulk-ryu-throwing').hide();
			$('.hulk-ryu-ready').show();
		});
});

var coolSound = false;
function playCool () {
  coolSound = !coolSound;
  if (coolSound) {
    $('#cool')[0].play();
    $('#cool')[0].volume = 0.5;
  }
}

$(document).keydown(function(e) {
    if (e.keyCode == 88) {
      playCool();
      $('.ryu-ready').hide();
      $('.ryu-still').hide();
      $('.ryu-cool').show();
      $('.hulk-ryu-ready').hide();
      $('.hulk-ryu-still').hide();
      $('.hulk-ryu-cool').show();
    }   
  }).keyup(function(e) {
    if (e.keyCode == 88) {
      $('#cool')[0].pause();
      $('#cool')[0].load();
      $('.ryu-cool').hide();
      $('.ryu-still').show();
      $('.hulk-ryu-cool').hide();
      $('.hulk-ryu-still').show();
    }
  });

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}