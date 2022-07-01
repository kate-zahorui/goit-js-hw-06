const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientsRef = document.querySelector("#ingredients");

const ingredientItems = ingredients.map(ingredient => {
	const item = document.createElement("li");
	item.textContent = ingredient;
	item.classList.add("item");
	return item;
});

ingredientsRef.append(...ingredientItems);
