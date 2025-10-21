# 🧾 React Controlled Form Example

This project demonstrates how to create a **controlled form component** in React using the `useState` hook. It’s a simple yet essential example for beginners learning about **two-way data binding**, **form handling**, and **state management** in React.

---

## 🚀 Features

- ✅ Controlled input using React state  
- ✅ Real-time updates as the user types  
- ✅ Prevents default form reload on submit  
- ✅ Clears input after submission  
- ✅ Clean, minimal UI styling with Tailwind CSS  

---

## 🧠 Concept Overview

A **controlled component** means:
- The input field’s value is **controlled by React state** (`username`).
- Every change in the input updates the state via `onChange`.
- The UI always reflects the current state value.

This pattern ensures synchronization between the UI and the underlying data.

---

## 💻 Code Explanation

```jsx
import React, { useState } from "react";

const App = () => {
  const [username, setuser] = useState(""); // State to store input value

  const subhandler = (e) => {
    e.preventDefault();       // Prevent form reload
    console.log("submited");  // Action on submit
    setuser("");              // Reset input field
  };

  return (
    <div>
      <form onSubmit={subhandler} className="m-6">
        <input
          value={username}
          onChange={(e) => setuser(e.target.value)}
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
```

