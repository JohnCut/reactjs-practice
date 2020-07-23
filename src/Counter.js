import React, { useState } from "react";
import "./Counter.css";

function Counter({ set = 1 }) {
  // first value, second function
  const [count, setCount] = useState(0);
  return (
    <div className="Counter">
      <h2>{count}</h2>
      <button onClick={() => setCount(count + set)}>+{set}</button>
    </div>
  );
}

export default Counter;
