# 📡 React API Calling Example using Axios

This project demonstrates a simple API call in React using Axios. It fetches data from a public API and displays it dynamically when a button is clicked.

##

<h3>🚀 Features</h3>

- Fetches data from a REST API using Axios
- Uses React Hooks (useState) for state management
- Handles asynchronous operations using async/await
- Displays fetched data dynamically on the webpage
- Clean and minimal UI with Tailwind CSS

##

<h3>🧩 Code Overview</h3>

- Import Dependencies

```bash
import axios from "axios";
import React, { useState } from "react";
```
Axios is used for making HTTP requests, and useState manages the component state.

##

- Main Component

```bash
const [d, setd] = useState([]);
```
d stores the data fetched from the API.

##

- Fetching Data

```bash
const getData = async () => {
  const response = await axios.get("https://picsum.photos/v2/list");
  setd(response.data);
};
```
The function getData() calls the API and updates the state with the response data.

##
