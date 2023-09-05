const fontSlider = document.querySelector("#font-size-control");
const fontExample = document.querySelector("#text");

const handleSlider = (event) => {
  fontExample.style.fontSize = event.currentTarget.value + "px";
};

fontSlider.addEventListener("input", handleSlider);
