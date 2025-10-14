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
