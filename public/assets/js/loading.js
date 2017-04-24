// $(document).on('click', '#but', loadingGif(event));

$('#but').on('click', function(event){
	event.preventDefault();
	// $('.loading').css('display', 'block');
	// var loadImg = $('<img>');
	// loadImg.addClass('loadGif');
	// loadImg.attr('src', '/assets/img/loading.gif');
	// $('.loading').append(loadImg);
	var emailInfo = {
		name: $('#name').val().trim(),
		subject: $('#subject').val().trim(),
		fromEmail: $('#fromEmail').val().trim(),
		message: $('#textbox').val().trim()
	}

	console.log('emailInfo', emailInfo);
	$.post('/email', emailInfo).done(function(data){

		$('#name').val("");
		$('#subject').val("");
		$('#fromEmail').val("");
		$('#textbox').val("");
		
		$('.loading').fadeIn();
		setTimeout(hide, 7777);
		
	});
});

function hide(){
	// $('.loading').css('display', 'none');
	$('.loading').fadeOut();
	// $('.loadGif').remove();
}