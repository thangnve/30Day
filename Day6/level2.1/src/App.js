import React from "react";

const App = () => {
  const colors = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
    "#FFA500",
    "#800080",
    "#008000",
    "#000080",
    "#FFC0CB",
    "#FF7F50",
    "#FFD700",
    "#FF1493",
    "#00CED1",
    "#800000",
    "#FF4500",
    "#DA70D6",
    "#8B008B",
    "#2E8B57",
    "#4682B4",
    "#B0C4DE",
    "#FF69B4",
    "#8A2BE2",
    "#556B2F",
    "#9932CC",
    "#8B0000",
    "#FF8C00",
    "#4B0082",
    "#32CD32",
    "#9932CC",
    "#8B0000",
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "50px" }}>30 Day Of React</h1>
      <p style={{ fontSize: "30px" }}>Hexadecimal Colors</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          align: "center",
          marginTop: "30px",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", width: "1400px" }}>
          {colors.map((color, index) => (
            <div
              key={index}
              style={{
                backgroundColor: color,
                width: "150px",
                height: "150px",
                margin: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {color}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
