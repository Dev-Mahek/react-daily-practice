// counter app:-
import React, { useState } from "react";

function App() {
  const [num, setnum] = useState(0);

  return (
    <div>
      <h2 className="text-4xl px-6 py-5 text-black font-semibold">
        Number is {num}
      </h2>
      <button
        className="px-4 py-2 bg-emerald-600 rounded mx-6 font-semibold"
        onClick={() => setnum(num + 10)}
      >
        Increment
      </button>
      <button
        className="px-4 py-2 bg-emerald-600 rounded font-semibold"
        onClick={() => setnum(num - 10)}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
