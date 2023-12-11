import React from "react";
import Header from "../Header/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Billboard from "../billboard/Billboard";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <div className="heading-section">
          <Header />
          <Billboard />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
