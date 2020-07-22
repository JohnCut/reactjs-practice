import React from "react";

function Greeter({ name, excitement = 1, age = 99 }) {
  const greet = () => {
    alert(`HELLO MF ${name}`);
  };

  return (
    <>
      <h1>
        Hello There, {name}
        {"!".repeat(excitement)}
      </h1>
      <p>You are {age} years old XD</p>
      <button onClick={greet}>Click me MF</button>
    </>
  );
}

export default Greeter;
