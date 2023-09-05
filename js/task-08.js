const loginForm = document.querySelector(".login-form");

const handleLoginForm = (event) => {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    window.alert(
      "Seems like you haven't filled some information, please, check it"
    );
  } else {
    const loginData = {
      email: email.value,
      password: password.value,
    };
    console.log(loginData);
    event.currentTarget.reset();
  }
};

loginForm.addEventListener("submit", handleLoginForm);
