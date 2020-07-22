import React, { useState } from "react";

function Counter() {
  // first value, second function
  const [count, setCount] = useState(0);
  const [isHappy, setIsHappy] = useState(false);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <h3>{isHappy ? ":)" : ":("}</h3>
      <button onClick={() => setIsHappy(!isHappy)}>Change my mood</button>
    </div>
  );
}

export default Counter;
