const validationInput = document.querySelector("#validation-input");

const handleBlur = (event) => {
  event.currentTarget.classList.add("valid");
  if (event.currentTarget.dataset.length < event.currentTarget.value.length) {
    event.currentTarget.classList.replace("valid", "invalid");
  } else {
    event.currentTarget.classList.replace("invalid", "valid");
  }
  if (event.currentTarget.value.length <= 0) {
    event.currentTarget.classList.remove("valid");
  }
};

validationInput.addEventListener("blur", handleBlur);
