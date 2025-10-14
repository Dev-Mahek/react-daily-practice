//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖FORM➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

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
