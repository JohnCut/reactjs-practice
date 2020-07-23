import React, { useState } from "react";
import "./Mood.css";

function Mood() {
  // first value, second function
  const [isHappy, setIsHappy] = useState(false);
  return (
    <div>
      <h3 className="Mood" style={{ color: isHappy ? "green" : "red" }}>
        {isHappy ? ":)" : ":("}
      </h3>
      <button onClick={() => setIsHappy(!isHappy)}>Change my mood</button>
    </div>
  );
}

export default Mood;
