import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import "./LoginSignup.css";

function LoginSignup() {
  const [action, setAction] = useState("Sign Up");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <React.Fragment>
      <div className="App-body">
        <div className="container">
          <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="inputs">
              {action === "Login" ? (
                <div></div>
              ) : (
                <div className="input">
                  <label htmlFor="name" />
                  <FontAwesomeIcon icon={faUser} />
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              )}

              <div className="input">
                <label htmlFor="email" />
                <FontAwesomeIcon icon={faEnvelope} />
                <input
                  type="email"
                  id="email"
                  placeholder="Email Id"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input">
                <label htmlFor="password" />
                <FontAwesomeIcon icon={faLock} />
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            {action === "Sign Up" ? (
              <div></div>
            ) : (
              <div className="forgot-password">
                Lost Password? <span>Click Here!</span>
              </div>
            )}

            <div className="submit-container">
              <button
                type="submit"
                className={action === "Login" ? "submit gray" : "submit"}
                onClick={() => {
                  setAction("Sign Up");
                }}
              >
                Sign Up
              </button>
              <button
                type="submit"
                className={action === "Sign Up" ? "submit gray" : "submit"}
                onClick={() => {
                  setAction("Login");
                }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LoginSignup;
