const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const ingredientsJS = [];

ingredients.forEach((el) => {
  const newLi = document.createElement("li");
  newLi.textContent = el;
  newLi.className = "item";
  ingredientsJS.push(newLi);
});

list.append(...ingredientsJS);
