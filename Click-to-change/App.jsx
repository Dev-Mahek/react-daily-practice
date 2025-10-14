//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖CHANGE NAME ON-CLICK➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

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
