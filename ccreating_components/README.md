# 🔰 React Components & Props Example

<img width="1813" height="636" alt="Untitled" src="https://github.com/user-attachments/assets/af73093f-d4eb-4efe-8eb7-a8cd26ea74d5" />

<p>This project demonstrates how to create, reuse, and pass data to components in React using props. It’s a beginner-friendly 
example showing how you can structure and use components effectively to build dynamic UIs.</p>

##

<h3>🚀 Features</h3>

- ✅ Creating and using reusable React components
- 🔁 Passing data between components using props
- 🎨 Styled using Tailwind CSS
- 👤 Example of rendering multiple user cards dynamically
- 🧱 Organized folder structure with separate component files

##

<h3>🗂️ Project Structure</h3>

```bash
📁 src
 ┣ 📁 components
 ┃ ┗ 📄 Card.jsx
 ┃ ┗ 📄 Header.jsx
 ┣ 📄 App.jsx
 ┣ 📄 index.js
```

##    

<h3>⚙️ Installation & Setup</h3>

1. Clone the repository

```bash
git clone https://github.com/Dev-Mahek/react-daily-practice.git
cd react-daily-practice
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
Run the development server
````

4. Open your browser

```bash
http://localhost:3000
```

##

<h3>🧠 Concepts Covered</h3>

1. Creating and Using Components

```bash
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
```

2. Simple Card Component

```bash
const Card = (props) => {
  return <div className="text-3xl">User name is {props.user}</div>;
};
export default Card;
```

3. Advanced Example with Props

```bash
function Card(props) {
  return (
    <div className="mr-7 bg-white text-black inline-block p-6 text-center rounded">
      <img
        className="ml-4 h-32 w-32 rounded-full mb-3"
        src={props.photo}
        alt=""
      />
      <h1 className="text-2xl font-semibold mb-4">{props.user}</h1>
      <h4 className="text-blue-400">{props.prof}</h4>
      <h2>
        {props.city}, {props.age}
      </h2>
      <button className="mt-5 bg-emerald-600 text-white px-4 py-2 rounded font-medium">
        Add Friend
      </button>
    </div>
  );
}
export default Card;
```

4. Passing Data into Components

```bash
let user = "Mahek";
<Card user={user} />
```

5. Rendering Multiple Components Dynamically

```bash
{users.map((elem, idx) => (
  <Card
    key={idx}
    user={elem.name}
    age={elem.age}
    city={elem.city}
    photo={elem.profile_photo}
    prof={elem.profession}
  />
))}
```

##

<h3>🧑‍💻 Built With</h3>

- ⚛️ React.js
- 💨 Tailwind CSS
- 🛠️ Vite or Create React App (any React setup works)

##

<h3>📄 License</h3>

This project is licensed under the MIT License — feel free to use and modify it for learning or personal projects.
