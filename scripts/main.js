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

// mixitup
let containerEl = document.querySelector(".mix-container");
let mixer = mixitup(containerEl);

let toTopbtn = document.getElementsByClassName("goTop")[0];

let pin = document.getElementById("pin");
let startingPoint = pin.offsetTop;
function backTotop() {
	if (window.pageYOffset <= startingPoint) {
		toTopbtn.classList.add("goTop-hidden");

		toTopbtn.classList.remove("goTop");
	} else {
		toTopbtn.classList.add("goTop");
		toTopbtn.classList.remove("goTop-hidden");
	}
}
//back to top
window.onscroll = function () {
	backTotop();
};

// news latter
// const newsLetter = document.querySelector(".newsLatter-wrapper");
// const clsBtnNewsLatter = document.querySelector(".cls-btn-newsletter");

// clsBtnNewsLatter.addEventListener('click', function() {
// 	newsLetter.classList.add("newsLatter-hide");
// })

// setTimeout(function() {
// 	newsLetter.classList.remove("hidden-wrapper");
// }, 5000);
// new code here...
