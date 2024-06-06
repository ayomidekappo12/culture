document.addEventListener("DOMContentLoaded", () => {
  const googleLoginButton = document.getElementById("google-login");
  const linkedinLoginButton = document.getElementById("linkedin-login");
  const facebookLoginButton = document.getElementById("facebook-login");
  const loginForm = document.getElementById("login-form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const submitButton = document.getElementById("submit-button");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");

  const redirectUri = `${window.location.origin}${window.location.pathname}`;

  googleLoginButton.addEventListener("click", () => {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&state=google_44SSW33565GG&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+openid&client_id=${
      process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID
    }&redirect_uri=${encodeURIComponent(redirectUri)}`;
  });

  linkedinLoginButton.addEventListener("click", () => {
    window.location.href = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=linkedin_tZo2h8GqAHXaKmM&scope=openid%20profile%20email&client_id=${
      process.env.NEXT_PUBLIC_LINKEDIN_OAUTH_CLIENT_ID
    }&redirect_uri=${encodeURIComponent(redirectUri)}`;
  });

  facebookLoginButton.addEventListener("click", () => {
    window.location.href = `https://www.facebook.com/v19.0/dialog/oauth?response_type=code&state=facebook_XX56TYDD34S&scope=email%20public_profile&client_id=${
      process.env.NEXT_PUBLIC_FACEBOOK_OAUTH_CLIENT_ID
    }&redirect_uri=${encodeURIComponent(redirectUri)}`;
  });

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    submitButton.disabled = true;

    const email = emailInput.value;
    const password = passwordInput.value;

    // Client-side validation
    let valid = true;
    emailError.textContent = "";
    passwordError.textContent = "";

    if (!email.match(/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      emailError.textContent = "Invalid email format";
      valid = false;
    }

    if (
      !password.match(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/
      )
    ) {
      passwordError.textContent =
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
      valid = false;
    }

    if (!valid) {
      submitButton.disabled = false;
      return;
    }

    try {
      const loginResponse = await login(email, password);
      const fetchUserResponse = await fetchUser(loginResponse.token);

      dispatch(
        addLocalUser({
          firstName: fetchUserResponse.firstName,
          lastName: fetchUserResponse.lastName,
          authToken: loginResponse.token,
          picture: fetchUserResponse.profileImage,
        })
      );

      await createSession(loginResponse.token);

      if (new URLSearchParams(window.location.search).get("source") === "se") {
        window.close();
      } else {
        window.location.href = "/dashboard/my-profile";
      }
    } catch (error) {
      alert("Something went wrong: " + error.message);
    } finally {
      submitButton.disabled = false;
    }
  });
});
