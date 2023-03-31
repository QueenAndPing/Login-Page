const form = document.getElementById("join-form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent the form from submitting

  if (username.value === "" && password.value === "") {
    errorMessage.textContent = "Please enter your username and password.";
    console.log("Login error.");
  } else if (username.value === "") {
    errorMessage.textContent = "Please enter your username.";
    console.log("Login error.");
  } else if (password.value === "") {
    errorMessage.textContent = "Please enter your password.";
    console.log("Login error.");
  } else {
    // submit the form if all inputs are filled
    form.submit();
  }
});