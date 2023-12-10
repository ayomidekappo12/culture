import React from "react";
import Header from "../header/header";
import Billboard from "../billboard/billboard";
import Featured_products from "../featured-products/products";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <div className="heading-section">
          <Header />
          <Billboard />
          <Featured_products />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
