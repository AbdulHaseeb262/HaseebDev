document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("registerForm");

  if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevents the form from submitting normally

      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if (username && email && password) {
        alert("Registration successful!");
        // You can replace this with sending the data to the server, e.g., using fetch or XMLHttpRequest
      } else {
        alert("Please fill in all fields.");
      }
    });
  }

  // Register Now button click event to open the register page
  const registerButton = document.getElementById("register-btn");
  if (registerButton) {
    registerButton.addEventListener("click", function () {
      window.location.href = "register.html"; // Opens the register page
    });
  }
});
