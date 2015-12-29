$(document).ready(function() {
	$('.read-more a').click(function(e) {
		e.preventDefault();
		$(this).parent().toggleClass('active');
		if ($(this).parent().hasClass('active')) {
			$(this).parent().prev().addClass('open')
		}
		else{
			$(this).parent().prev().removeClass('open')
		}
	});
});