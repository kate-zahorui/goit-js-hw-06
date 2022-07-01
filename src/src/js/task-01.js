const categories = document.querySelectorAll("#categories .item");

console.log("Number of categories: ", categories.length);

for (const category of categories) {
	console.log("Category: ", category.firstElementChild.textContent);
	const items = category.querySelectorAll(".item li");
	console.log("Elements: ", items.length);
}
