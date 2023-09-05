function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtn = document.querySelector(".change-color");
const colorText = document.querySelector(".color");

changeBtn.addEventListener("click", backgroundColorHandler);

function backgroundColorHandler(event) {
  const randomValueTmp = getRandomHexColor();
  document.body.style.backgroundColor = randomValueTmp;
  colorText.textContent = randomValueTmp;
}
