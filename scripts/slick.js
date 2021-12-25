$(function () {
	// single element
	$(".single-item").slick();
	// fade element
	$(".fade-effect").slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: "linear",
	});
});
