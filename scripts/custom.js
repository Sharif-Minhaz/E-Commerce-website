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
