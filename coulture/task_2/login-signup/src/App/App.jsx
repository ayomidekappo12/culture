import React from "react";
import ErrorBoundary from "../ErrorBoundary";
import "bootstrap/dist/css/bootstrap.min.css";

import LoginSignup from "../LoginSignup/LoginSignup";

function App() {
  return (
    <React.Fragment>
      <ErrorBoundary>
        <div className="App">
          <div className="heading-section"></div>
          <LoginSignup />
        </div>
      </ErrorBoundary>
    </React.Fragment>
  );
}

export default App;
