const counterValue = document.querySelector("#value");
counterValue.textContent = 0;

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

const onValueDecrement = function () {
	counterValue.textContent = Number(counterValue.textContent) - 1;
};
const onValueIncrement = function () {
	counterValue.textContent = Number(counterValue.textContent) + 1;
};

decrementButton.addEventListener("click", onValueDecrement);
incrementButton.addEventListener("click", onValueIncrement);
