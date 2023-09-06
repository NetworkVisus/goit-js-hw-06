function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const collection = document.querySelector("#boxes");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const input = document.querySelector("input");

const maxInput = Number(input.getAttribute("max"));
const minInput = Number(input.getAttribute("min"));
const stepInput = Number(input.getAttribute("step"));

function createBoxes(amount) {
  let divWidth = 30;
  let divHeight = 30;
  if (amount < minInput || amount > maxInput) {
    window.alert(`Amount must be in the range from ${minInput} to ${maxInput}`);
    return;
  }
  const boxesInDOM = [];
  for (let i = 0; i < amount; i += stepInput) {
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
  input.value = "";
}
