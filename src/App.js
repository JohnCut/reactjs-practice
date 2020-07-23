import React from "react";
import Navbar from "./Navbar";
import Greeter from "./Greeter";
import Counter from "./Counter";
import Mood from "./Mood";
import Cart from "./Cart";
import "./App.css";

const initItems = [
  { id: 1, name: "Parmesan", price: 5.45, qty: 1 },
  { id: 2, name: "Mozzarella", price: 7.25, qty: 2 },
  { id: 3, name: "Cheddar", price: 3.75, qty: 3 },
];

function App() {
  return (
    <div>
      <Cart initItems={initItems} />
      <Counter set={5} />
      <Counter />
      <Mood />
      <Navbar />
      <Greeter name="John Cut" age="35" excitement={4} />
      <Greeter name="Jankat" excitement={2} />
      <h1>HELLO FROM THE OTHER SIDE</h1>
    </div>
  );
}

export default App;
