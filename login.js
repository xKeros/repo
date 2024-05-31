document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Check if email and password match
    if (email === "teamo@jhojan.com" && password === "27.05.2022") {
      // Redirect to index.html
      window.location.href = "carta.html";
    } else {
      // Show error message
      alert("Invalid email or password. Please try again.");
    }
  });
