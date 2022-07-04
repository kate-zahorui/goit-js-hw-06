const formRef = document.querySelector(".login-form");

const onFormSubmit = function (event) {
	event.preventDefault();
	const { email, password } = formRef.elements;

	if (email.value === "" || password.value === "") {
		alert("Всі поля повинні бути заповнені!");
	} else {
		console.log({
			email: `${email.value}`,
			password: `${password.value}`,
		});
		event.currentTarget.reset();
	}
};

formRef.addEventListener("submit", onFormSubmit);
