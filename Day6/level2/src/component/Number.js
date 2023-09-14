import React from "react";

function Numbers({ numbers }) {
  const list = numbers.map((number) => {
    let color = number % 2 === 0 ? "red" : "green";

    return (
      <div
        onClick={() => {
          document.getElementById(number).style.backgroundColor = "yellow";
        }}
        id={number}
        key={number}
        style={{ backgroundColor: color }}
        className="numbers "
      >
        <li className="">{number}</li>
      </div>
    );
  });

  return list;
}
export default Numbers;
