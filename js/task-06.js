const inputRef = document.querySelector("#validation-input");

const onInputValidation = function () {
	inputRef.classList.remove(...inputRef.classList);
	if (inputRef.value.length === Number(inputRef.dataset.length)) {
		inputRef.classList.add("valid");
	} else {
		inputRef.classList.add("invalid");
	}
};

inputRef.addEventListener("blur", onInputValidation);
