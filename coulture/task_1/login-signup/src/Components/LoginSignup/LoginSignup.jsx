import React from "react";
import "./LoginSignup.css";
import Email_icon from "../Assets/Email.png";
import Password_icon from "../Assets/padlock.png";
import User_icon from "../Assets/person.png";
import { useState } from "react";

function LoginSignup() {
  const [action, setAction] = useState("Sign Up");

  return (
    <React.Fragment>
      <div className="App-body">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <img src={User_icon} alt="" />
              <input type="name" placeholder=" Name" />
            </div>
          )}

          <div className="input">
            <img src={Email_icon} alt="" />
            <input type="email" placeholder=" Email Id" />
          </div>
          <div className="input">
            <img src={Password_icon} alt="" />
            <input type="password" placeholder=" Password" />
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
    </React.Fragment>
  );
}

export default LoginSignup;
