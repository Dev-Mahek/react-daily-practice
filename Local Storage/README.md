# 🗄️ Local Storage Example in React

This simple React application demonstrates how to use the **Local Storage API** in a React component to store and retrieve data persistently in the browser.

---

## 📘 Overview

The code performs the following actions:

1. Sets a simple key-value pair in local storage (`age: 24`).
2. Creates a user object (`username`, `age`, `city`).
3. Converts the user object into a JSON string using `JSON.stringify()` and saves it to local storage.
4. Logs the stored user object to the console.
5. Displays a simple “Hii” message on the web page.

---

## 🧠 Key Concepts

### 1. **Saving Data to Local Storage**

```javascript
localStorage.setItem("age", "24");
```
Stores the string value "24" under the key "age" in the browser’s local storage.

### 2. **Saving Objects**

```javascript
const user1 = {
  username: "Roy",
  age: 24,
  city: "Silchar",
};
localStorage.setItem("user", JSON.stringify(user1));
```
Objects must be converted into a string format before being stored, using JSON.stringify().

### 3. **Retrieving Data (Commented Example)**

```javascript
// const user = localStorage.getItem("user");
// console.log(user);
```
To use stored data, retrieve it using localStorage.getItem() and convert it back into an object using JSON.parse().

##

