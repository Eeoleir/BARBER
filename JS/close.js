// Select the login button element
const closebutton = document.querySelector('.close-button');

// Add a click event listener to the login button element
closebutton.addEventListener('click', function(event) {
  // Prevent the default behavior of the link
  event.preventDefault();

  // Use GSAP to fade out the landing page content
  gsap.to('body', {
    duration: 0.5,
    opacity: 0,
    onComplete: function() {
      // Once the fade-out animation is complete, redirect to the home page
      window.location.href = 'index.html';
    }
  });
});