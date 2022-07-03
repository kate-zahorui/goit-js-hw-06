const fontSizeInputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

const onTextSizeChange = function () {
	textRef.style.fontSize = `${fontSizeInputRef.value}px`;
};

fontSizeInputRef.addEventListener("input", onTextSizeChange);
