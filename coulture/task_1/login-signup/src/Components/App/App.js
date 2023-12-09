import React from "react";
import Header from "../header/header";
import Billboard from "../billboard/billboard";
import "./App.css";

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
