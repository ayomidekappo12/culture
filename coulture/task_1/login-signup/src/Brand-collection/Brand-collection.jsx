import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import brand1 from "../Assets/brand1.png";
import brand2 from "../Assets/brand2.png";
import brand3 from "../Assets/brand3.png";
import brand4 from "../Assets/brand4.png";
import brand5 from "../Assets/brand5.png";
import Footer_bottom from "../Footer-bottom/Footer-bottom";

function Brand_collection() {
  return (
    <>
      <div className="App-brand_collection">
        <section
          id="brand-collection"
          className="padding-medium bg-light-grey"
          style={{
            background: "#EADDCA",
            marginBottom: "0px",
            padding: "0px",
          }}
        >
          <div className="container">
            <div className="d-flex flex-wrap justify-content-between">
              <img src={brand1} alt="phone" className="brand-image" />
              <img src={brand2} alt="phone" className="brand-image" />
              <img src={brand3} alt="phone" className="brand-image" />
              <img src={brand4} alt="phone" className="brand-image" />
              <img src={brand5} alt="phone" className="brand-image" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Brand_collection;
