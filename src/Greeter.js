import React from "react";

function Greeter({ name, excitement = 1, age = 99 }) {
  return (
    <>
      <h1>
        Hello There, {name}
        {"!".repeat(excitement)}{" "}
      </h1>
      <p>You are {age} years old XD</p>
    </>
  );
}

export default Greeter;
