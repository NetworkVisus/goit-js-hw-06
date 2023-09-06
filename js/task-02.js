const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

list.append(
  ...ingredients.map((el) => {
    const newLi = document.createElement("li");
    newLi.textContent = el;
    newLi.className = "item";
    return newLi;
  })
);
