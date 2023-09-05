const categories = document.querySelector("#categories");
const categoriesArr = [...categories.children];

//const categoriesArr = [...categories];

console.log(`Number of categories: ${categoriesArr.length}`);
categoriesArr.forEach((el) => {
  console.log(`Category: ${el.querySelector("h2").textContent}`);
  console.log(`Elements: ${el.querySelectorAll("li").length}`);
});
