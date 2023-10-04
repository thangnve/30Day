import React, { useState } from "react";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <main className={"container" + isDarkMode ? "bg-black" : "bg-info"}>
      <div>
        <h1>Liên Minh</h1>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Chế độ sáng" : "Chế độ tối"}
          Change Background
        </button>
      </div>
    </main>
  );
};

export default App;
