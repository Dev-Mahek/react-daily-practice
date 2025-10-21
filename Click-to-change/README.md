# 👆 React Change Name on Click Example

This project demonstrates how to **update state dynamically** in React using the `useState` hook and an **onClick event handler**.  
It’s a simple and fun example of how interactivity works in React — clicking a button changes the displayed text instantly.

---

## 🚀 Features

- ⚡ Dynamic UI updates with `useState`
- 🖱️ Changes text on button click
- 🧩 Beginner-friendly React hook example
- 🎨 Styled with Tailwind CSS

---

# 🧠 Concept Overview

React’s `useState` hook allows you to:
- **Store values** that can change over time (state variables).
- **Update the UI automatically** when those values change.

In this example:
- The variable `click` stores the displayed name.
- The function `setclick()` updates that name when the button is pressed.

---

## 💻 Code Explanation

```jsx
import React, { useState } from "react";

const App = () => {
  // Declare a state variable 'click' with an initial value "Mahek"
  const [click, setclick] = useState("Mahek");

  // Function to update the state when the button is clicked
  const clicked = () => {
    setclick("Dev_Mahek");
  };

  return (
    <div className="m-5">
      <h1 className="text-5xl mb-2">Hi {click}</h1>
      <button
        onClick={clicked}
        className="bg-amber-300 hover:bg-amber-400 py-1 px-2 rounded text-black"
      >
        Change
      </button>
    </div>
  );
};

export default App;
```
##

# ⚙️ How It Works

1. The component initializes click as "Mahek".
2. The UI displays Hi Mahek.
3. When the user clicks the Change button:
  - The clicked() function runs.
  - It calls setclick("Dev_Mahek").
  - React re-renders the component showing Hi Dev_Mahek.

---

# 📜 License

This project is open-source and available under the MIT License.
