# 🎯 React Props Examples — Passing Data Between Components

This project demonstrates multiple ways to pass data using props in React — from sending a single variable to mapping and rendering components using JSON data.
Each example builds on the previous one to show how flexible and powerful props are in component-based design.

##

<h3>📘 Topics Covered</h3>

- ✅ Passing single values as props
- ✅ Passing multiple values as props
- ✅ Passing objects as props
- ✅ Rendering components dynamically from JSON arrays
- ✅ Using unique keys with .map()
- ✅ Basic styling with Tailwind CSS

##

<h3>🧱 Project Structure</h3>

```bash
📁 src
 ┣ 📁 components
 ┃ ┗ 📄 Card.jsx
 ┣ 📄 App.jsx
 ┣ 📄 index.js
```

##

<h3>⚙️ Installation & Setup</h3>

1. Clone this repository
```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

or (if using CRA):
```bash
npm start
```

##

<h3>🧩 Example 1 — Passing a Single Prop</h3>

``
🗂️ App.jsx
``

```bash
import React from "react";
import Card from "./components/Card";

const App = () => {
  let user = "Mahek";
  return (
    <div>
      <Card p={user} />
      {/* <Card p="Mahek" /> works too */}
    </div>
  );
};

export default App;
```

``
🗂️ Card.jsx
``

```bash
import React from "react";

const Card = (props) => {
  return (
    <div>
      <h1>Hii {props.p}</h1>
    </div>
  );
};

export default Card;
```
🧠 Concept: Props let you pass data from parent (App) to child (Card) components

##

<h3>🧩 Example 2 — Passing Multiple Props</h3>

``
🗂️ App.jsx
``

```bash
<Card u="Mahek" a="25" c="Silchar" />
```

``
🗂️ Card.jsx
``

```bash
const Card = (props) => {
  return (
    <div className="p-10">
      <h1>Username is {props.u}</h1>
      <h2>{props.c}, {props.a}</h2>
      <button className="bg-red-500 py-2 px-3">Add Friend</button>
    </div>
  );
};
```

🧠 Concept: You can send multiple props like u, a, c (name, age, city) to one component.

##

<h3>🧩 Example 3 — Passing an Object as a Prop</h3>

``
🗂️ App.jsx
``

```bash
const data = { name: "Mahek", age: "25", city: "Silchar" };
<Card n={data} />;
```

``
🗂️ Card.jsx
``

```bash
const Card = (props) => {
  return (
    <div className="p-20">
      <h1>Name: {props.n.name}</h1>
      <h2>Age: {props.n.age}</h2>
      <h2>City: {props.n.city}</h2>
    </div>
  );
};
```

🧠 Concept: You can pass an entire object and access its properties using props.n.name, props.n.age, etc.

##

<h3>🧩 Example 4 — Using Props with JSON Array (Dynamic Rendering)</h3>

``
🗂️ App.jsx
``

```bash
const wifus = [
  {
    name: "Rem",
    charm: "Sweet and loyal personality",
    age: 18,
    anime_name: "Re:Zero",
    profile_photo: "https://animetree.wordpress.com/...jpg",
  },
  {
    name: "Mikasa Ackerman",
    charm: "Strong, protective, and graceful in battle",
    age: 19,
    anime_name: "Attack on Titan",
    profile_photo: "https://upload-os-bbs.hoyolab.com/...webp",
  },
  // more objects...
];

return (
  <div>
    {wifus.map((e, idx) => (
      <Card
        key={idx}
        wifu={e.name}
        c={e.charm}
        a={e.age}
        Aname={e.anime_name}
        pic={e.profile_photo}
      />
    ))}
  </div>
);
```

``
🗂️ Card.jsx
``

```bash
const Card = (props) => {
  return (
    <div className="p-10">
      <img className="h-32 w-32 rounded-full mb-3" src={props.pic} alt="" />
      <h1>Name: {props.wifu}</h1>
      <h2>
        Charm: {props.c}, Age: {props.a}
      </h2>
      <h2>Anime Name: {props.Aname}</h2>
      <button className="bg-red-500 py-2 px-3">Add Friend</button>
    </div>
  );
};
```

🧠 Concept: .map() lets you render multiple components dynamically.
Each card receives data through props for that specific object.

##

