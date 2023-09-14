import React from "react";

function Numbers({ numbers }) {
  const list = numbers.map((number) => {
    let color = number % 2 === 0 ? "green" : "green";
    let flag = true;
    if (number < 2) {
      flag = false;
    } else if (number === 2) {
      flag = true;
    } else if (number % 2 === 0) {
      flag = false;
    } else {
      for (var i = 3; i < number - 1; i += 2) {
        if (number % i === 0) {
          flag = false;
        }
      }
    }

    if (flag === true) {
      document.getElementById(number).style.backgroundColor = "red";
    }
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
