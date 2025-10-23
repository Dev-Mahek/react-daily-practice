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

//-----------------
//>IN APP.jsx:

import React from "react";
import Card from "./components/Card";

const App = () => {
  const data = { name: "Mahek", age: "25", city: "Silchar" };
  return (
    <div>
      <Card n={data} />
    </div>
  );
};

export default App;

//>IN CARD.jxs
import React from "react";

const Card = (props) => {
  return (
    <div className="p-20">
      <h1>Name: {props.n.name}</h1>
      <h2>Age: {props.n.age}</h2>
      <h2>City: {props.n.city}</h2>
    </div>
  );
};

export default Card;

//✅ PASS ELEMENTS INTO COMPONENTS USING JSON DATA:-
//>IN APP.jsx:
import React from "react";
import Card from "./components/Card";

const App = () => {
  const wifus = [
    {
      name: "Rem",
      charm: "Sweet and loyal personality with a caring heart",
      age: 18,
      profile_photo:
        "https://animetree.wordpress.com/wp-content/uploads/2014/04/nisekoi-marika-endcard.jpg?w=1024&h=576&crop=1",
      anime_name: "Re:Zero − Starting Life in Another World",
    },
    {
      name: "Mikasa Ackerman",
      charm: "Strong, protective, and graceful in battle",
      age: 19,
      profile_photo:
        "https://upload-os-bbs.hoyolab.com/upload/2024/04/30/291245055/7c04eba3c5dbe652d5364b4c52e212be_2640741872976846715.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70",
      anime_name: "Attack on Titan",
    },
    {
      name: "Zero Two",
      charm: "Playful, mysterious, and deeply affectionate",
      age: 18,
      profile_photo:
        "https://honeysanime.com/wp-content/uploads/2015/11/ui-hirasawa-k-on.jpg",
      anime_name: "Darling in the FranXX",
    },
    {
      name: "Hinata Hyuga",
      charm: "Shy yet determined, kind-hearted with quiet strength",
      age: 17,
      profile_photo:
        "https://cdn.myanimelist.net/s/common/uploaded_files/1449744903-ab86223fb92775af85e26145431edc98.png",
      anime_name: "Naruto",
    },
    {
      name: "Asuna Yuuki",
      charm: "Elegant, brave, and devoted with a gentle aura",
      age: 18,
      profile_photo:
        "https://preview.redd.it/best-wife-material-v0-tttluigpqq2f1.jpeg?auto=webp&s=708e2b0fdaabf225515d4660ab41ebb78e3cc209",
      anime_name: "Sword Art Online",
    },
  ];

  return (
    <div>
      <div>
        {wifus.map(function (e, idx) {
          //the "idx" 👆 gives an unique identiyu to each element which are made through ".map"
          return (
            <Card
              key={idx} //👈 Gives an unique identity to each elemet by passing a "KEY"
              wifu={e.name}
              c={e.charm}
              a={e.age}
              Aname={e.anime_name}
              pic={e.profile_photo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;

//>IN CARD.jsx:
import React from "react";

const Card = (props) => {
  console.log(props);

  return (
    <div className="p-10 ">
      <img className="h-32 w-32 rounded-full mb-3" src={props.pic} alt="" />
      <h1>Name: {props.wifu}</h1>
      <h2>
        Charm: {props.c}, Age: {props.a}
      </h2>
      <h2>AnimeName: {props.Aname}</h2>
      <button className="bg-red-500 py-2 px-3">Add Friend</button>
    </div>
  );
};

export default Card;

//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖API CALLING➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//✅ CALLING API DATA THROUGH AXIOS:-
//>IN APP.jsx:
import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [d, setd] = useState([]);

  const getData = async () => {
    //👆putting "async" to the nearest function where we want to use "async await"
    const response = await axios.get("https://picsum.photos/v2/list"); //👈calling the API here on a function
    setd(response.data); //👆the "async await" assure untill and unless the data came it will wait at line no.546
  };

  return (
    <div className="p-10">
      <button
        onClick={getData}
        className="bg-green-700 py-2 px-3 rounded active:scale-90"
      >
        Get Data
      </button>
      <div className="bg-gray-800">
        {d.map(function (elem, idx) {
          return <h1 key={idx}>{elem.author}</h1>;
        })}
      </div>
    </div>
  );
};

export default App;

//-----------------------------------------------------------------------------------------------

//IN APP.jsx:
import axios from "axios";
import React from "react";

const App = () => {
  async function getData() {
    //------------------------------------with fetch calling api---------------------------------
    const resp = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    console.log(resp);
    //----------------------------------with axios calling api------------------------------------
    const resp1 = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log(resp1);
  }

  return (
    <div>
      <button onClick={getData}>get data</button>
    </div>
  );
};

export default App;

//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖REACT ROUTER DOM➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//✅ ROUTER DOM:-
// IN APP.jsx:
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;

//> IN HEADER.jsx:(Under components folder)
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="bg-emerald-900 flex py-5 px-10 items-center justify-between">
        <h2 className="text-4xl">
          Mahek{" "}
          <input className="bg-white text-black w-70 h-8 mt-1.5" type="text" />
        </h2>
        <div className="flex gap-8 items-center">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/product">Product</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;

//>📃 PAGES:(Under pages folder)
# <About /> page 
# <Contact /> page
# <Product /> page

//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖LOCAL STORAGE➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

import React from "react";

const App = () => {
  localStorage.setItem("age", "24");

  // const user = localStorage.getItem("user");
  // console.log(user);

  const user1 = {
    username: "Roy",
    age: 24,
    city: "Silchar",
  };
  localStorage.setItem("user", JSON.stringify(user1));
  console.log(user1);

  return <div>Hii</div>;
};

export default App;

//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖USE EFFECT➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
