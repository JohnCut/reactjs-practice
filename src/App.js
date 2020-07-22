import React from "react";
import Navbar from "./Navbar";
import Greeter from "./Greeter";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Greeter name="John Cut" age="35" excitement={4} />
      <Greeter name="Jankat" excitement={2} />
      <h1>HELLO FROM THE OTHER SIDE</h1>
    </div>
  );
}

export default App;
