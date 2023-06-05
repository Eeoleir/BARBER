const loginForm = document.getElementById("login-form");
const loginPrompt = document.getElementById("login-prompt");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevents form submission

  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  // Validation
  if (username.trim() === "" || password.trim() === "") {
    loginPrompt.textContent = "Please enter your username and password.";
    loginPrompt.classList.remove("success");
    loginPrompt.classList.add("error");
    return; // Exit the function to prevent further execution
  }

  // Here we add our authentication logic, such as sending a request to a server to validate the user's credentials
  // compare the entered username and password with the values stored in local storage
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (username === storedUsername && password === storedPassword) {
    loginPrompt.textContent = "Login successful!";
    loginPrompt.classList.remove("error");
    loginPrompt.classList.add("success");
    window.location.href = "index(in).html"; // Redirect to success page
  } else {
    loginPrompt.textContent = "Invalid username or password.";
    loginPrompt.classList.remove("success");
    loginPrompt.classList.add("error");
  }
});


// show and unshow password
const eyeIcon1 = document.getElementById("eye-icon1");
const passwordInput1 = document.getElementById("login-password");

eyeIcon1.addEventListener("click", () => {
  if (passwordInput1.type === "password") {
    passwordInput1.type = "text";
    eyeIcon1.classList.remove("fa-eye-slash");
    eyeIcon1.classList.add("fa-eye");
  } else {
    passwordInput1.type = "password";
    eyeIcon1.classList.remove("fa-eye");
    eyeIcon1.classList.add("fa-eye-slash");
  }
});