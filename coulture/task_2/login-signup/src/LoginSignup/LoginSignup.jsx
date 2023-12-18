import React, { useState } from "react";
import "./LoginSignup.css";
import Email_icon from "../Assets/Email.png";
import Password_icon from "../Assets/padlock.png";
import User_icon from "../Assets/person.png";

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
              <label htmlFor="name">Name</label>
              <img src={User_icon} alt="User icon" />
              <input type="text" id="name" placeholder="Name" />
            </div>
          )}

          <div className="input">
            <label htmlFor="email">Email</label>
            <img src={Email_icon} alt="Email icon" />
            <input type="email" id="email" placeholder="Email Id" />
          </div>
          <div className="input">
            <label htmlFor="password">Password</label>
            <img src={Password_icon} alt="Password icon" />
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
    </React.Fragment>
  );
}

export default LoginSignup;
