import React from "react";
import Header from ".../Header/Header";
import Login from ".../LoginSignup/LoginSignup";
import Footer from "../Footer/Footer";
import LoginSignup from "../LoginSignup/LoginSignup";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <div className="heading-section">
          <Header />
        </div>
        <LoginSignup />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
