const form = document.getElementById("registration-form");
const regPrompt = document.getElementById("registration-prompt");
const username = document.getElementById("reg-username");
const email = document.getElementById("reg-email");
const password = document.getElementById("reg-password");
const confirmPassword = document.getElementById("reg-confirm-password");

form.addEventListener("submit", (e) => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = confirmPassword.value.trim();
  e.preventDefault();
  validateInputs();

  if (
    usernameValue !== "" &&
    emailValue !== "" &&
    isValidEmail(emailValue) &&
    passwordValue !== "" &&
    passwordValue.length >= 8 &&
    password2Value !== "" &&
    password2Value === passwordValue
  ) {
    localStorage.setItem("username", usernameValue);
    localStorage.setItem("email", emailValue);
    localStorage.setItem("password", passwordValue);
    console.log("working");
    regPrompt.textContent = "";
    regPrompt.textContent = "Registration successful!";
    regPrompt.classList.remove("error");
    regPrompt.classList.add("success");
  } else {
    regPrompt.textContent = "Registration Failed";
    regPrompt.classList.remove("success");
    regPrompt.classList.add("error");
  }
  // Clear the form
  document.getElementById("reg-username").value = "";
  document.getElementById("reg-email").value = "";
  document.getElementById("reg-password").value = "";
  document.getElementById("reg-confirm-password").value = "";
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = confirmPassword.value.trim();

  if (usernameValue === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 characters");
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    setError(confirmPassword, "Please confirm your password");
  } else if (password2Value !== passwordValue) {
    setError(confirmPassword, "Passwords don't match");
  } else {
    setSuccess(confirmPassword);
  }
};

// show and unshow password
const eyeIcon2 = document.getElementById("eye-icon2");
const passwordInput2 = document.getElementById("reg-password");

eyeIcon2.addEventListener("click", () => {
  if (passwordInput2.type === "password") {
    passwordInput2.type = "text";
    eyeIcon2.classList.remove("fa-eye-slash");
    eyeIcon2.classList.add("fa-eye");
  } else {
    passwordInput2.type = "password";
    eyeIcon2.classList.remove("fa-eye");
    eyeIcon2.classList.add("fa-eye-slash");
  }
});

const eyeIcon3 = document.getElementById("eye-icon3");
const passwordInput3 = document.getElementById("reg-confirm-password");

eyeIcon3.addEventListener("click", () => {
  if (passwordInput3.type === "password") {
    passwordInput3.type = "text";
    eyeIcon3.classList.remove("fa-eye-slash");
    eyeIcon3.classList.add("fa-eye");
  } else {
    passwordInput3.type = "password";
    eyeIcon3.classList.remove("fa-eye");
    eyeIcon3.classList.add("fa-eye-slash");
  }
});
