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

	$('.slideshow_pic').click(function(e) {
		e.preventDefault();

		var $this = $(this),
				item = $this.closest('.carousel-block'),
				container = $this.closest('.card-slide'),
				display = container.find('.large-img'),
				path = item.find('img').attr('src'),
				duration = 200;

		if(!item.hasClass('active')){
			item.addClass('active').siblings().removeClass('active');
			display.find('img').fadeOut(duration, function(){
				$(this).attr('src', path).fadeIn(duration);
			})
		}

	});

	$('.menu-toggle').click(function(e) {
		e.preventDefault();
		if($('.mobile-menu').is(':hidden')){
			$('.mobile-menu').slideDown(300);
			$(this).addClass('active');
		}
		else{
			$('.mobile-menu').slideUp(300);
			$(this).removeClass('active');
		}
	});
	$('.search-toggle').click(function(e) {
		e.preventDefault();
		if($('.mobile-search').is(':hidden')){
			$('.mobile-search').slideDown(300);
			$(this).addClass('active');
		}
		else{
			$('.mobile-search').slideUp(300);
			$(this).removeClass('active');
		}
	});
});