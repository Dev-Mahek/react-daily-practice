import React, { useState } from "react";

const App = () => {
  // Declare a state variable 'click' with default value "Mahek"
  // 'setclick' is the function used to update the value of 'click'
  const [click, setclick] = useState("Mahek");

  /*👆enter useStateSnippit to generate this code structure.
  (this is a variabl created with react, useState hooks)*/

  // Function to change the value of 'click' when the button is clicked
  const clicked = () => {
    setclick("Dev_Mahek");
  };
  /*👆make a function("clicked") where we will put the "setclick" [setclick is 'writable' and click is 'readable' only] to change the username*/
  
  return (
    <div className="m-5">
      {/* Displaying the greeting message using the 'click' variable */}
      <h1 className="text-5xl mb-2">Hi {click}</h1>

      {/* Button that calls the 'clicked' function when pressed */}
      <button
        onClick={clicked} /*👈calling the function("clicked") here to change username on click*/
        className="bg-amber-300 hover:bg-amber-400 py-1 px-2 rounded text-black"
      >
        Change
      </button>
    </div>
  );
};

export default App;

//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

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

//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
