import React from "react";
import Header from "../Header/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Billboard from "../billboard/Billboard";
import Featured_products from "../products/products";
import L_collection from "../L-collection/L-collection";
import Subscribe from "../Subscribe/Subscribe";
import BestSelling from "../Best-selling/Best-selling";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <div className="heading-section">
          <Header />
          <Billboard />
          <Featured_products />
          <L_collection />
          <Subscribe />
          <BestSelling />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
