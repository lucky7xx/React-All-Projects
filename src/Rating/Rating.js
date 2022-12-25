import React, { useState } from "react";

export default function MyComponent() {
  const [color, setColor] = useState("red");

  const changeColor = () => {
    setColor("blue");
  };

  return (
    <div>
      <button onClick={changeColor}>Change color</button>
      <div style={{ backgroundColor: color }}>
        This div will change color when the button is clicked.
      </div>
    </div>
  );
}
