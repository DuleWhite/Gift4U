$(function(){
	var slick = $('.slick');
	if($(window).width()>=900){
		slick.not('.slick-initialized').slick({
			dots: false,
			slidesToShow: 3,
			slidesToScroll: 1
		});
	}
});
$(window).resize(function(){

	checkSlick();
})
function checkSlick(){
	var slick = $('.slick');
	if($(window).width()<900){
		slick.slick("unslick");
		slick.width($(window).width());
	}
	else{
		slick.not('.slick-initialized').slick({
			dots: false,
			slidesToShow: 3,
			slidesToScroll: 1
		});
	}
}
