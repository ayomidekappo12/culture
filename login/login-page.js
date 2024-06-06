document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements for form, input fields, and error messages
  const loginForm = document.getElementById("login-form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const submitButton = document.getElementById("submit-button");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");

  // Add an event listener for the form submit event
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent default form submission
    submitButton.disabled = true; // Disable the submit button to prevent multiple submissions

    // Get the values from the input fields
    const email = emailInput.value;
    const password = passwordInput.value;

    // Client-side validation
    let valid = true;
    emailError.textContent = ""; // Clear previous error messages
    passwordError.textContent = ""; // Clear previous error messages

    // Validate email format using regex
    if (!email.match(/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      emailError.textContent = "Invalid email format";
      valid = false;
    }

    // Validate password format using regex
    if (
      !password.match(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/
      )
    ) {
      passwordError.textContent =
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
      valid = false;
    }

    // If validation fails, re-enable the submit button and return
    if (!valid) {
      submitButton.disabled = false;
      return;
    }

    // Try to log the user in
    try {
      // Attempt to log the user in
      // This code is not provided in the snippet, but it would typically involve making a request to a server to authenticate the user
      // Placeholder for actual login logic
      // const loginResponse = await login(email, password);
      // Handle successful login (e.g., redirect to a different page)
    } catch (error) {
      // If an error occurs during the login process, display an alert message to the user with a description of the error
      alert("Something went wrong: " + error.message);
    } finally {
      // Regardless of whether an error occurred or not, ensure that the submit button is re-enabled after the login process has been attempted
      submitButton.disabled = false;
    }
  });
});
