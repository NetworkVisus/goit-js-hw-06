const nameOutput = document.querySelector("#name-output");
const nameInput = document.querySelector("#name-input");

nameInput.addEventListener("input", (event) => {
  nameOutput.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") nameOutput.textContent = "Anonymous";
});
