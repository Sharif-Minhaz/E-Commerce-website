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

// for total bill in cart page
let totalBill = document.getElementById("total-bill");

let productCount = Number(document.getElementById("product-count").innerHTML);
let discountPrice = Number(
	document.getElementsByClassName("discount-price")[0].innerHTML
);
let mainPrice = Number(document.getElementById("main-price").innerHTML);
function increaseCount() {
	productCount < 100 ? (productCount += 1) : (productCount = productCount);
	document.getElementById("product-count").innerHTML = productCount;
	document.getElementsByClassName("discount-price")[0].innerHTML = (
		discountPrice * productCount
	).toFixed(2);
	document.getElementById("main-price").innerHTML = (
		mainPrice * productCount
	).toFixed(2);
	totalBill.innerHTML = (mainPrice * productCount + 13).toFixed(2);
}

function decreaseCount() {
	productCount > 1 ? (productCount -= 1) : (productCount = productCount);
	document.getElementById("product-count").innerHTML = productCount;
	document.getElementsByClassName("discount-price")[0].innerHTML = (
		discountPrice * productCount
	).toFixed(2);
	document.getElementById("main-price").innerHTML = (
		mainPrice * productCount
	).toFixed(2);
	totalBill.innerHTML = (mainPrice * productCount + 13).toFixed(2);
}

// image popup
let imageBase = document.getElementById("opImage");
let productCountCng = document.getElementById("product-count");
let discountPriceCng = document.getElementsByClassName("discount-price")[0];
let mainPriceCng = document.getElementById("main-price");
let imgHeading = document.getElementsByClassName("product-heading")[0];
function expandImg(imageId) {
	let imageID = document.getElementById(imageId);
	if (imageBase.src != imageID.src) {
		imageBase.src = imageID.src;
		productCountCng.innerHTML = "1";
		switch (imageId) {
			case "img1":
				passingValue(55, 110, "White chair tool making easer");
				break;
			case "img2":
				passingValue(60, 120, "Office chair with smooth wheel");
				break;
			case "img3":
				passingValue(40, 80, "Steel chair traditional version");
				break;
			case "img4":
				passingValue(65, 130, "Leather chair for comfort plus");
				break;
		}
	}
	magnify("opImage", 3);
}

function passingValue(discount, main, heading) {
	imgHeading.innerHTML = heading;
	discountPriceCng.innerHTML = discount.toFixed(2);
	mainPriceCng.innerHTML = main.toFixed(2);
	productCount = Number(productCountCng.innerHTML);
	discountPrice = Number(discountPriceCng.innerHTML);
	mainPrice = Number(mainPriceCng.innerHTML);
}

// payment group
function cashMethodAction(e) {
	let cash = document.getElementById("cash");
	let bank = document.getElementById("bank");
	if (e.value == "bank" && e.checked == true) {
		cash.disabled = true;
		bank.disabled = false;
	} else {
		bank.disabled = true;
		cash.disabled = false;
	}
}
