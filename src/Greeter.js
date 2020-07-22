import React from "react";

function Greeter(props) {
  return (
    <>
      <h1>Hello There, {props.name}!</h1>
      <p>You are {props.age} years old XD</p>
    </>
  );
}

export default Greeter;
