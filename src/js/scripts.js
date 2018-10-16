$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		items:1,
		dots: true,
		dotsEach: true,
	});
	$('#main').turbotabs({
		animation : 'Slide',
		backgroundColor : 'none',
		width : '100%',
		padding : '0 0 0 0'
		// navBackground : '#c2f2ed',
		// mode : 'accordion',

	});
});

jQuery:
	$(".tab_item").not(":first").hide();
$(".tab-content .tab").click(function() {
	$(".tab-content .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
