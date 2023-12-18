import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import "./LoginSignup.css";

function LoginSignup() {
  const [action, setAction] = useState("Sign Up");

  return (
    <React.Fragment>
      <div className="App-body">
        <div className="container">
          <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            {action === "Login" ? (
              <div></div>
            ) : (
              <div className="input">
                <label htmlFor="name" />
                <FontAwesomeIcon icon={faUser} />
                <input type="text" id="name" placeholder="Name" />
              </div>
            )}

            <div className="input">
              <label htmlFor="email" />
              <FontAwesomeIcon icon={faEnvelope} />
              <input type="email" id="email" placeholder="Email Id" />
            </div>
            <div className="input">
              <label htmlFor="password" />
              <FontAwesomeIcon icon={faLock} />
              <input type="password" id="password" placeholder="Password" />
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
            <div
              className={action === "Login" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("Sign Up");
              }}
            >
              Sign Up
            </div>
            <div
              className={action === "Sign Up" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("Login");
              }}
            >
              Login
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LoginSignup;
