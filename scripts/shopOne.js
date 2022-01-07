let gridIcon1 = document.querySelector(".grid-icons span:first-child");
let gridIcon2 = document.querySelector(".grid-icons span:last-child");
let mix = document.getElementsByClassName("mix");
function threeLayout() {
	gridIcon1.classList.add("derived-color");
	gridIcon1.classList.remove("selected-color");
	gridIcon2.classList.add("selected-color");
	gridIcon2.classList.remove("derived-color");
	for (let i = 0; i < mix.length; i++) {
		mix[i].classList.add("mix-grid");
	}
}
function fourLayout() {
	gridIcon1.classList.add("selected-color");
	gridIcon1.classList.remove("derived-color");
	gridIcon2.classList.add("derived-color");
	gridIcon2.classList.remove("selected-color");
    for (let i = 0; i < mix.length; i++) {
		mix[i].classList.remove("mix-grid");
	}
}
