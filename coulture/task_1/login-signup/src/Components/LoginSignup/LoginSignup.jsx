import React from "react";
import "./LoginSignup.css";
import Email_icon from "../Assets/Email.png";
import Password_icon from "../Assets/padlock.png";
import User_icon from "../Assets/person.png";

const LoginSignup = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={User_icon} alt="" />
          <input type="name" />
        </div>
        <div className="input">
          <img src={Email_icon} alt="" />
          <input type="email" />
        </div>
        <div className="input">
          <img src={Password_icon} alt="" />
          <input type="password" />
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
