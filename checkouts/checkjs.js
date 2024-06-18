const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const productImg = document.getElementById("product-img");

let images = [
	"./Imgs/canecabranca.jpeg",
	"./Imgs/canecacolorida.jpeg",
	"./Imgs/canecacoracao.jpeg"
];

let currentImageIndex = 0;

leftArrow.addEventListener("click", () => {
	currentImageIndex--;
	if (currentImageIndex < 0) {
		currentImageIndex = images.length - 1;
	}
	productImg.src = images[currentImageIndex];
});

rightArrow.addEventListener("click", () => {
	currentImageIndex++;
	if (currentImageIndex >= images.length) {
		currentImageIndex = 0;
	}
	productImg.src = images[currentImageIndex];
});

productImg.addEventListener("load", () => {
	leftArrow.style.opacity = 1;
	rightArrow.style.opacity = 1