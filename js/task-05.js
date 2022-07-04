const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

const onNameChange = function () {
	if (inputRef.value.length > 0) {
		outputRef.textContent = inputRef.value;
	} else {
		outputRef.textContent = "Anonymous";
	}
};

inputRef.addEventListener("input", onNameChange);
