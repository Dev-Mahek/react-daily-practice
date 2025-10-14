//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖COUNTER➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

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

//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖COUNTER 2➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

import React, { useState } from "react";

const App = () => {
  // Declare a state variable 'num' with an initial value of 0
  // 'setnum' is the function used to update the value of 'num'
  const [num, setnum] = useState(0);

  // 👇 Function to increase the number by 10 when called
  const increase = () => {
    setnum(num + 10);
  };

  // 👇 Function to decrease the number by 10 when called
  const decrease = () => {
    setnum(num - 10);
  };

  return (
    <div className="m-5">
      {/* Display the current number */}
      <h1 className="text-5xl mb-5">Number is {num}</h1>

      {/* Button to 👇 increase the number by 10 when clicked */}
      <button
        onClick={increase}
        className="bg-green-400 hover:bg-green-500 py-1 px-2 rounded text-black"
      >
        Increment
      </button>

      {/* Button to 👇 decrease the number by 10 when clicked */}
      <button
        onClick={decrease}
        className="bg-red-400 hover:bg-red-500 py-1 px-2 rounded text-black ml-2"
      >
        Decrement
      </button>
    </div>
  );
};

export default App;


// -----------------------------------------✨Enhanced Version✨------------------------------------------------------

// import React, { useState } from "react";

// function App() {
//   const [num, setnum] = useState(0);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       {/* Counter Container: Glassmorphism effect */}
//       <div className="bg-white/30 backdrop-blur-lg border border-white/40 rounded-3xl shadow-xl p-8 max-w-sm w-full transition-all duration-300 hover:shadow-2xl">
        
//         {/* Title/Display */}
//         <h2 className="text-5xl font-extrabold text-gray-800 mb-8 text-center tracking-tight transition-colors duration-300">
//           <span className="block text-sm font-medium text-gray-600 mb-1">Current Value</span>
//           {num}
//         </h2>
        
//         {/* Buttons Container */}
//         <div className="flex justify-center space-x-4">
          
//           {/* Decrement Button */}
//           <button
//             className="flex-1 px-6 py-3 bg-red-500 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-red-300"
//             onClick={() => setnum(num - 10)}
//           >
//             -10
//           </button>
          
//           {/* Increment Button */}
//           <button
//             className="flex-1 px-6 py-3 bg-blue-500 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-300"
//             onClick={() => setnum(num + 10)}
//           >
//             +10
//           </button>
//         </div>

//         {/* Reset Button (Optional) */}
//         <button
//           className="mt-6 w-full py-2 text-sm text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
//           onClick={() => setnum(0)}
//         >
//           Reset
//         </button>

//       </div>
//     </div>
//   );
// }

// export default App;
