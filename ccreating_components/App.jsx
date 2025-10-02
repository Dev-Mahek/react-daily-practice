// -----------Creating and Using Components--------------

import React from "react";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
    </>
  );
};

export default App;

// ----------Passing Data in Components-----------

import React from "react";
import Card from "./components/card";

const App = () => {
  let user = "Mahek";
  return (
    <div>
      <Card user={user} />
    </div>
  );
};

export default App;

// ------------Another example of Passing Data in Components---------------

import React from "react";
import Card from "./components/card";

function App() {
  let users = [
    {
      name: "Aarav Sharma",
      city: "Delhi",
      age: 27,
      profession: "Software Engineer",
      profile_photo: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      name: "Meera Nair",
      city: "Bengaluru",
      age: 24,
      profession: "Graphic Designer",
      profile_photo: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    {
      name: "Rohit Das",
      city: "Kolkata",
      age: 30,
      profession: "Digital Marketer",
      profile_photo: "https://randomuser.me/api/portraits/men/31.jpg",
    },
    {
      name: "Ananya Gupta",
      city: "Mumbai",
      age: 26,
      profession: "Content Writer",
      profile_photo: "https://randomuser.me/api/portraits/women/41.jpg",
    },
    {
      name: "Karan Verma",
      city: "Chandigarh",
      age: 29,
      profession: "Entrepreneur",
      profile_photo: "https://randomuser.me/api/portraits/men/51.jpg",
    },
  ];

  return (
    <div>
      <div className="p-10">
        {users.map(function (elem, idx) {
          return (
            <Card
              key={idx}
              user={elem.name}
              age={elem.age}
              city={elem.city}
              photo={elem.profile_photo}
              prof={elem.profession}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
