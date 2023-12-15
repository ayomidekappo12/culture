import React from "react";
import "./Footer-bottom.css";
import american from "../Assets/american-express.jpg";
import mastercard from "../Assets/mastercard.png";
import visa_icon from "../Assets/visa-icon.jpg";

function Footer_bottom() {
  return (
    <>
      <div className="App-bottom">
        <div id="footer-bottom">
          <div className="container">
            <div className="d-flex align-items-center flex-wrap justify-content-between">
              <div className="copyright">
                <p>
                  Freebies by
                  <a href="https://templatesjungle.com/">Templates Jungle</a>
                  Distributed by <a href="https://themewagon.com">ThemeWagon</a>
                </p>
              </div>
              <div className="payment-method">
                <p>Payment options :</p>
                <div className="card-wrap">
                  <img src={visa_icon} alt="visa" />
                  <img src={mastercard} alt="mastercard" />
                  <img src={american} alt="american-express" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer_bottom;
