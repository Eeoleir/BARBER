// Select the login button element
const loginButton = document.querySelector('.login-button');

// Add a click event listener to the login button element
loginButton.addEventListener('click', function(event) {
  // Prevent the default behavior of the link
  event.preventDefault();

  // Use GSAP to fade out the landing page content
  gsap.to('body', {
    duration: 0.5,
    opacity: 0,
    onComplete: function() {
      // Once the fade-out animation is complete, redirect to the login page
      window.location.href = 'LOGIN.html';
    }
  });
});