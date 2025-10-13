import React from "react";
import Card from "./components/Card";

const App = () => {
  const data = [
    {
      profile: "me1.jpg",
      name: "Mahek",
      user: "@dev-mahek",
      heading: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      headingO:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, cupiditate!",
      heasingT:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      background: "#f9e50c",
      backgroundH: "#efda0f",
      backgroundProg: "#d1be00",
    },
    {
      profile: "me2.jpg",
      name: "Pou",
      user: "@Pou123",
      heading: "Lorem ipsum dolor sit amet consectetur.",
      headingO:
        "Dolor sit, amet consectetur adipisicing elit. Laboriosam, cupiditate!",
      heasingT: "Lorem ipsum dolor sit adipisicing elit. Quisquam, quidem.",
      background: "#0BA6DF",
      backgroundH: "#1E93AB",
      backgroundProg: "#1E93AB",
    },
  ];

  return (
    <div className="flex">
      {data.map((e, idx) => {
        return (
          <Card
            key={idx}
            image={e.profile}
            name={e.name}
            user={e.user}
            heading={e.heading}
            headingO={e.headingO}
            headingT={e.heasingT}
            background={e.background}
            backgroundH={e.backgroundH}
            backgroundProg={e.backgroundProg}
          />
        );
      })}
    </div>
  );
};

export default App;
