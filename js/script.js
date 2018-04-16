$(function(){
	// .slick
	var slick = $('.slick');
	if($(window).width()<900){
		slick.width($(window).width()-50); 
	}
	else{
		slick.width(900);
		slick.not('.slick-initialized').slick({
			dots: false,
			slidesToShow: 3,
			slidesToScroll: 1
		});
	}
	
	// .faq img
	var faq_img = $(".faq img");
	if($(window).width()<940){ faq_img.width(0.90 * $(window).width())
	}else{ faq_img.width(940); }

	// .aboutus .cd-fixed-bg .rect
	var rect = $(".aboutus .cd-fixed-bg .rect");
	if($(window).width()<940){ rect.width(0.53 * $(window).width())
	}else{ rect.width(500); }
	rect.css( "left",(($(window).width()-rect.width())/2)+"px" )

});
$(window).resize(function(){
	// .slick
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

	// .faq img
	var faq_img = $(".faq img");
	if($(window).width()<940){ faq_img.width(0.95 * $(window).width() - 50 )
	}else{ faq_img.width(940); }
	
	// .aboutus .cd-fixed-bg .rect
	var rect = $(".aboutus .cd-fixed-bg .rect");
	if($(window).width()<940){ rect.width(0.53 * $(window).width())
	}else{ rect.width(500); }
	rect.css( "left",(($(window).width()-rect.width())/2)+"px" );
})

