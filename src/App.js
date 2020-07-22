import React from "react";
import Navbar from "./Navbar";
import Greeter from "./Greeter";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Greeter name="John Cut" age="35" />
      <Greeter name="Jankat" age="23" />
      <h1>HELLO FROM THE OTHER SIDE</h1>
    </div>
  );
}

export default App;
