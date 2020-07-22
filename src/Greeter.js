import React from "react";

function Greeter({ name, age = 99 }) {
  return (
    <>
      <h1>Hello There, {name}!</h1>
      <p>You are {age} years old XD</p>
    </>
  );
}

export default Greeter;
