function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const collection = document.querySelector("#boxes");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const input = document.querySelector("input");

let divWidth = 30;
let divHeight = 30;

function createBoxes(amount) {
  if (amount < 0) {
    window.alert("Amount can't be lower than 0");
    return;
  }
  const boxesInDOM = [];
  for (let i = 0; i < amount; i += 1) {
    boxesInDOM.push(
      `<div style="background-color:${getRandomHexColor()};width:${divWidth}px;height:${divHeight}px;"></div>`
    );
    divWidth += 10;
    divHeight += 10;
  }

  collection.insertAdjacentHTML("beforeend", boxesInDOM.join(""));
}

btnCreate.addEventListener("click", handleCreation);
btnDestroy.addEventListener("click", destroyBoxes);

function handleCreation(event) {
  createBoxes(input.value);
}

function destroyBoxes() {
  collection.innerHTML = "";
  divWidth = 30;
  divHeight = 30;
}
