import React from "react";
import { tenHighestPopulation } from "./component/country";
import Countries from "./component/map_list";

const App = () => {
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}>30 Day Of React</h1>
        <h2 style={{ textAlign: "center", fontFamily: "monospace" }}>
          Work Population
        </h2>
        <p style={{ textAlign: "center" }}>Ten most population countries</p>
        <Countries countries={tenHighestPopulation} />
      </div>
    </div>
  );
};
export default App;
