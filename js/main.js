$(function(){

	//고정헤더
	var $window = $(window),
	header = $('.header'),
	threshold = $('.contents').offset().top + 300;
	// header.offset().top + header.outerHeight();

	$window.on('scroll', $.throttle(1000 / 15, function () {
	    if ($window.scrollTop() > threshold) {
	        header.addClass('fixed');
	        snb.stop().animate({
	        	left:'-250px'
	        },500);
	    } else {
	        header.removeClass('fixed');
	    }
		// console.log(threshold, $window.scrollTop());
	}));
	$window.trigger('scroll');

	//snb
	var btn_menu = $('.btn_menu'),
		snb = $('.snb');

		btn_menu.click(function(e){
			e.preventDefault();

			snb.stop().animate({
					left:'0px'
			},500);
			console.log('hellow');
		});

		$('body').click(function(e){
			if($(e.target).hasClass('btn_menu')){
				snb.stop().animate({
					left:'0px'
				},500);
			}

			if(!$(e.target).hasClass('btn_menu')){
				if(!$(e.target).parents().hasClass('snb_wrap')){
					snb.stop().animate({
						left:'-250px'
					},500);
				}
			}
			// console.log('hi');
			
		});
});