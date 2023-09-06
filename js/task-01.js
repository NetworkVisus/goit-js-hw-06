const categories = document.querySelector("#categories");
const categoriesArr = [...categories.children];

//const categoriesArr = [...categories];

console.log(`Number of categories: ${categoriesArr.length}`);
categoriesArr.forEach((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
  console.log();
});
