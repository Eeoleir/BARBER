const regForm = document.getElementById("registration-form");
const regPrompt = document.getElementById("registration-prompt");

regForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevents form submission

  const username = document.getElementById("reg-username").value;
  const email = document.getElementById("reg-email").value;
  const password = document.getElementById("reg-password").value;
  const confirmPassword = document.getElementById("reg-confirm-password").value;

  // Validation
  if (username.trim() === "" || email.trim() === "") {
    regPrompt.textContent = "Please fill in all fields.";
    regPrompt.classList.remove("success");
    regPrompt.classList.add("error");
    return; // Exit the function to prevent further execution
  }

  if (password.trim() === "") {
    regPrompt.textContent = "Please Enter your Password.";
    regPrompt.classList.remove("success");
    regPrompt.classList.add("error");
    return; // Exit the function to prevent further execution
  }

  if (password !== confirmPassword) {
    regPrompt.textContent = "Passwords do not match.";
    regPrompt.classList.remove("success");
    regPrompt.classList.add("error");
    return; // Exit the function to prevent further execution
  }

  // Here we add our registration logic, such as sending a request to a server to create a new user account
  // we'll just store the username and password in local storage
  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  regPrompt.textContent = "Registration successful!";
  regPrompt.classList.remove("error");
  regPrompt.classList.add("success");

  // Clear the form
  document.getElementById("reg-username").value = "";
  document.getElementById("reg-email").value = "";
  document.getElementById("reg-password").value = "";
  document.getElementById("reg-confirm-password").value = "";
});



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
