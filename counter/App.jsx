// counter app:-
import React, { useState } from "react";

function App() {
  const [num, setnum] = useState(0);

  return (
    <div>
      <h2 className="text-5xl bg-red-700">Number is {num}</h2>
      <button onClick={() => setnum(num + 10)}>Increment</button>
      <button onClick={() => setnum(num - 10)}>Decrement</button>
    </div>
  );
}

export default App;
