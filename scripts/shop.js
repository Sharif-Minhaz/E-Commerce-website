// shop one
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

// shop details
let heart = document.querySelector(".liking-product");
function likeProduct() {
	if (heart.classList.contains("fas")) {
		heart.classList.add("far");
		heart.classList.remove("fas", "text-danger");
	} else {
		heart.classList.add("fas", "text-danger");
		heart.classList.remove("far");
	}
}

let productCount = Number(document.getElementById("product-count").innerHTML);
let discountPrice = Number(document.getElementById("discount-price").innerHTML);
let mainPrice = Number(document.getElementById("main-price").innerHTML);
function increaseCount() {
	productCount < 100 ? (productCount += 1) : (productCount = productCount);
	document.getElementById("product-count").innerHTML = productCount;
	document.getElementById("discount-price").innerHTML = (
		discountPrice * productCount
	).toFixed(2);
	document.getElementById("main-price").innerHTML = (
		mainPrice * productCount
	).toFixed(2);
}

function decreaseCount() {
	productCount > 1 ? (productCount -= 1) : (productCount = productCount);
	document.getElementById("product-count").innerHTML = productCount;
	document.getElementById("discount-price").innerHTML = (
		discountPrice * productCount
	).toFixed(2);
	document.getElementById("main-price").innerHTML = (
		mainPrice * productCount
	).toFixed(2);
}

let imageBase = document.getElementById("opImage");
let productCountCng = document.getElementById("product-count");
let discountPriceCng = document.getElementById("discount-price");
let mainPriceCng = document.getElementById("main-price");
function expandImg(imageId) {
	let imageID = document.getElementById(imageId);
	if (imageBase.src != imageID.src) {
		imageBase.src = imageID.src;
		productCountCng.innerHTML = "1";
		switch (imageId) {
			case "img1":
				passingValue(55, 110);
				break;
			case "img2":
				passingValue(60, 120);
				break;
			case "img3":
				passingValue(40, 80);
				break;
			case "img4":
				passingValue(65, 130);
				break;
		}
	}
	magnify("opImage", 3);
}

function passingValue(discount, main) {
	discountPriceCng.innerHTML = discount.toFixed(2);
	mainPriceCng.innerHTML = main.toFixed(2);
	productCount = Number(productCountCng.innerHTML);
	discountPrice = Number(discountPriceCng.innerHTML);
	mainPrice = Number(mainPriceCng.innerHTML);
}
