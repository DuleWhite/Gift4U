$(function(){
	var slick = $('.slick');
	if($(window).width()>=900){
		slick.width(900);
		slick.not('.slick-initialized').slick({
			dots: false,
			slidesToShow: 3,
			slidesToScroll: 1
		});
	}
	else{
		slick.width($(window).width()-50);
	}
	
	if($(window).width()<940){
		$(".faq img").width(0.90 * $(window).width())
	}else{
		$(".faq img").width(940);
	}

	if($(window).width()<940){
		$(".aboutus .cd-fixed-bg .rect").width(0.53 * $(window).width())
	}else{
		$(".aboutus .cd-fixed-bg .rect").width(500);
	}

	$(".aboutus .cd-fixed-bg .rect").css(
			"left",(($(window).width()-this.width())/2)+"px"
		)
});
$(window).resize(function(){
	checkSlick();
	if($(window).width()<940){
		$(".faq img").width(0.95 * $(window).width() - 50 )
	}
	else{
		slick.width(940);
	}

	if($(window).width()<940){
		$(".aboutus .cd-fixed-bg .rect").width(0.53 * $(window).width())
	}else{
		$(".aboutus .cd-fixed-bg .rect").width(500);
	}
})
function checkSlick(){
	var slick = $('.slick');
	if($(window).width()<900){
		slick.slick("unslick");
		slick.width($(window).width());
	}
	else{
		slick.width(900);
		slick.not('.slick-initialized').slick({
			dots: false,
			slidesToShow: 3,
			slidesToScroll: 1
		});
	}
}
