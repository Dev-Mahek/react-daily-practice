import React from "react";

const Card = (props) => {
  console.log(props);
  return <div className="text-3xl">user name is {props.user}</div>;
};

export default Card;
