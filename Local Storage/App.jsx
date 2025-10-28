// ---------------------------LOCAL STORAGE----------------------------------------
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
