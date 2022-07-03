function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const bodyRef = document.body;
const changeColorButton = document.querySelector("button.change-color");
const colorName = document.querySelector("span.color");

const onBgColorChanging = function () {
	const newColor = getRandomHexColor();
	bodyRef.style.backgroundColor = newColor;
	colorName.textContent = newColor;
};

changeColorButton.addEventListener("click", onBgColorChanging);
