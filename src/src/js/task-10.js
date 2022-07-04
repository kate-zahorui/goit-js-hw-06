function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const inputRef = document.querySelector("#controls input");
const createBtnRef = document.querySelector("button[data-create]");
const destroyBtnRef = document.querySelector("button[data-destroy]");
const boxesRef = document.querySelector("#boxes");

const createBoxes = function (amount) {
	amount = Number(inputRef.value);
	const boxesArray = [];

	for (let i = 0; i < amount; i += 1) {
		let size = 30 + 10 * i;
		boxesArray[i] = document.createElement("div");
		boxesArray[i].style.width = `${size}px`;
		boxesArray[i].style.height = `${size}px`;
		boxesArray[i].style.backgroundColor = getRandomHexColor();
	}

	boxesRef.append(...boxesArray);
};

const destroyBoxes = function () {
	boxesRef.innerHTML = "";
};

createBtnRef.addEventListener("click", createBoxes);
destroyBtnRef.addEventListener("click", destroyBoxes);
