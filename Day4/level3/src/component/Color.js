import React from "react";

function Color(props) {
  const bgColor = MiniColor();
  return (
    <div className="container ">
      <div style={{ backgroundColor: `${bgColor}` }} className="border p-2 ">
        <h2 className="text-center">{bgColor}</h2>
      </div>
    </div>
  );
}

const MiniColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }

  return "#" + color;
};

export default Color;
