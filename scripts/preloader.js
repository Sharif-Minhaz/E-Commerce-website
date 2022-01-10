$(document).ready(function () {
	$(".preloader-ring").each(function () {
		let text = $(this).text(),
			textArr = text.split(""),
			a = 0;
		$(this).html("");
		for (let i = 0; i <= 30; i++) {
			if (!textArr[i] || textArr[i] == " ") {
				textArr[i] = "";
			}
			$(this).append(
				'<div class="preloader-sector" style="transform: rotateY(' +
					a +
					'deg) translateZ(160px)">' +
					textArr[i] +
					"</div>"
			);
			a = a + 12;
		}
	});
	$(window).on("load", function () {
		$(".preloader-content").css("display", "none");
	});
	$(".preloader-content").css("display", "flex");

});
