// navBar fade animation
$(function () {
	$(window).scroll(function () {
		if ($(window).scrollTop() > 80) {
			$(".main-nav").addClass("sticky-css");
		} else {
			$(".main-nav").removeClass("sticky-css");
		}
	});
	// searching
	$("#searching").on("click", function () {
		$(".search-bar-wrapper-hide")
			.addClass("search-bar-wrapper")
			.removeClass("search-bar-wrapper-hide");
	});
	// close button for close searching
	$(".cls-btn").on("click", function () {
		$(".search-bar-wrapper")
			.removeClass("search-bar-wrapper")
			.addClass("search-bar-wrapper-hide");
	});
	// owl carousel
	$(".carousel-1").owlCarousel({
		loop: true,
		margin: 24,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true,
			},
			600: {
				items: 3,
				nav: false,
			},
			1000: {
				items: 4,
				nav: true,
				loop: true,
			},
		},
	});
	// owl carousel
	$(".carousel-2").owlCarousel({
		loop: true,
		margin: 24,
		nav: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 3,
			},
			1000: {
				items: 3,
				loop: true,
			},
		},
	});
	$(".carousel-3").owlCarousel({
		loop: true,
		nav: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			1000: {
				items: 1,
				loop: true,
			},
		},
	});
	$(".cross-btn").hide();
	$(".cross-btn").on("click", function () {
		$(".menu-wrapper").removeClass("menu-wrapper-show");
		$(".cross-btn").hide();
		$(".bars-btn").show();
	});
	$(".bars-btn").on("click", function () {
		$(".menu-wrapper").addClass("menu-wrapper-show");
		$(".bars-btn").hide();
		$(".cross-btn").show();
	});
});