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
