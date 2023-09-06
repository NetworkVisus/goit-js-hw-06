const validationInput = document.querySelector("#validation-input");

const handleBlur = (event) => {
  if (
    Number(event.currentTarget.dataset.length) ===
    event.currentTarget.value.trim().length
  ) {
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.add("valid");
  } else {
    event.currentTarget.classList.remove("valid");
    event.currentTarget.classList.add("invalid");
  }
};

validationInput.addEventListener("blur", handleBlur);
