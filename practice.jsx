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

import React, { useState } from "react";

const App = () => {
  const [username, setuser] = useState("");

  const subhandler = (e) => {
    e.preventDefault();
    console.log("submited");

    setuser("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          subhandler(e);
        }}
        className="m-6"
      >
        <input
          value={username}
          onChange={(e) => {
            setuser(e.target.value);
          }}
          className="bg-white text-black rounded w-70 h-8 px-4 py-2"
          type="text"
          placeholder="Enter Name"
        />
        <button className="ml-3 bg-green-400 py-1 px-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default App;

//----------------same code 👇 but with comments(delete the above code once i understood and practice)-------------------

import React, { useState } from "react";

const App = () => {
  // State for the input field's current value.
  // "username" holds the text shown in the input (read value).
  // "setuser" updates that state (write value), causing a re-render.
  // This pattern makes the input a controlled component (two-way binding):
  // UI reflects state via value=, and state updates from UI via onChange.
  const [username, setuser] = useState("");

  // Form submit handler
  const subhandler = (e) => {
    e.preventDefault(); // Stop the browser from reloading on form submit
    console.log("submited"); // You could also log/use `username` here

    setuser(""); // Clear the input by resetting state
  };

  return (
    <div>
      {/* The form listens for submit events (button click or Enter key). */}
      <form
        onSubmit={(e) => {
          subhandler(e); // Call handler to prevent reload and process the value
        }}
        className="m-6"
      >
        {/* Controlled input: value comes from state, changes update state */}
        <input
          value={username} // Bind input's displayed value to React state
          onChange={(e) => {
            setuser(e.target.value); // Update state as the user types
          }}
          className="bg-white text-black rounded w-70 h-8 px-4 py-2"
          type="text"
          placeholder="Enter Name"
        />
        {/* Inside a form, a button defaults to type="submit" and triggers onSubmit */}
        <button className="ml-3 bg-green-400 py-1 px-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default App;
