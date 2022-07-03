const formRef = document.querySelector(".login-form");

const onFormSubmit = function (event) {
	event.preventDefault();
	const { email, password } = formRef.elements;

	const formValues = {
		email: `${email.value}`,
		password: `${password.value}`,
	};
	if (formValues.email === "" || formValues.password === "") {
		alert("Всі поля повинні бути заповнені!");
	} else {
		console.log(formValues);
		event.currentTarget.reset();
	}
};

formRef.addEventListener("submit", onFormSubmit);
