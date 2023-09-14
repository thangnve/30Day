import React from "react";
import Numbers from "./component/Number";
import "./App.css";

export default function App() {
  const numbers = [];

  for (let i = 1; i <= 30; i++) {
    numbers.push(i);
  }
  return (
    <div className="container">
      <div className="child ">
        <h1>Numbers List</h1>
        <ul style={{ listStyleType: "none" }} className="next">
          <Numbers numbers={numbers} />
        </ul>
      </div>
    </div>
  );
}
