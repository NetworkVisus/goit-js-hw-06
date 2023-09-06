const fontSlider = document.querySelector("#font-size-control");
const fontExample = document.querySelector("#text");

fontExample.style.fontSize = fontSlider.value + "px";

function handleSlider(event) {
  fontExample.style.fontSize = event.currentTarget.value + "px";
}

fontSlider.addEventListener("input", handleSlider);
