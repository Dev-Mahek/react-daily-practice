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

//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖COUNTER➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

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

//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖PROPS➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//✅ SENDING A "SINGLE" ELEMENT INTO A COMPONENT AND RECEIVING IT:-
//>IN APP.jsx 👇
import React from "react";
import Card from "./components/Card";

const App = () => {
  let user = "Mahek"; /*👈make a variable named "user"*/

  return (
    <div>
      <Card p={user} />
      {/* <Card p="Mahek" /> 👈can be written in this way also */}
    </div>
    /*👆passing that variable in "Card" tag under "p" you can name it anything*/
  );
};

export default App;

//>IN CARD.jsx (Component) 👇
import React from "react";

const Card = (props) => {
  console.log(props.p); //👈this will show the varbaile which we pass in "card" tag p=Mahek
  return (
    <div>
      <h1>Hii {props.p}</h1>
    </div>
    //👆"props.p" this will show "Mahek" after "Hii"
  );
};

export default Card;

//✅ SENDING MULTIPLE "ELEMENTS" INTO A COMPONENT:-
//>IN APP.jsx:👇
import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <Card u="Mahek" a="25" c="Silchar" />
    </div>
    //👆sending multiple elements into "Card"
  );
};

export default App;

//>IN CARD.jsx:👇
import React from "react";

const Card = (props) => {
  console.log(props);

  return (
    <div className="p-10 ">
      <h1>Username is, {props.u}</h1>  //👈receiving user name "u" to print on screen
      <h2>
        {props.c}, {props.a}  //👈receiving city and age "c", "a" to print on screen
      </h2>
      <button className="bg-red-500 py-2 px-3">Add Friend</button>
    </div>
  );
};

export default Card;

//✅ PASS ELEMENTS INTO COMPONENTS SING JSON DATA:-
//>IN APP.jsx:
