import asabeneh from "../src/image/asabeneh.jpg";
import logocss from "../src/image/css_logo.png";
import logohtml from "../src/image/html_logo.png";
import logoreact from "../src/image/react_logo.png";
import logojs from "../src/image/js_logo.png";
import React from "react";
function App() {
  return (
    <div className="container-fluid">
      <div>
        <h3 className="text-center fw-bold">Front End Technologies</h3>
      </div>
      <div className="d-flex justify-content-around p-5">
        <img src={logohtml} width="200" height="200" />
        <img src={logocss} width="200" height="200" />
        <img src={logojs} width="200" height="200" />
        <img src={logoreact} width="200" height="200" />
      </div>
    </div>
  );
}

export default App;
