import React from "react";
import { CircleX } from "lucide-react";

const Card = (props) => {
  return (
    <div className="p-20">
      <div
        className="shadow-[0_0_25px_rgba(0,0,0,0.5)] w-120 p-5 rounded-2xl relative border-3 border-zinc-700"
        style={{ backgroundColor: props.background }}
      >
        <div className="top-div flex">
          <img
            src={props.image}
            alt=""
            className="w-12 h-12 rounded-full object-cover border-2  border-zinc-700"
          />
          <div className="top_text ml-2 mt-2">
            <h4 className="font-semibold leading-none">{props.name}</h4>
            <h5 className="font-light w-30">{props.user}</h5>
          </div>
          <a>
            <CircleX className="ml-58 text-zinc-800 size-6 bg-orange-600 rounded-full p-0.4" />
          </a>
        </div>
        <div className="progress flex content-evenly gap-2 mt-4">
          <div className="w-20 h-1 bg-zinc-800 rounded-4xl"></div>
          <div
            className="w-20 h-1 rounded-4xl"
            style={{ backgroundColor: props.backgroundProg }}
          ></div>
          <div
            className="w-20 h-1 rounded-4xl"
            style={{ backgroundColor: props.backgroundProg }}
          ></div>
          <div
            className="w-20 h-1 rounded-4xl"
            style={{ backgroundColor: props.backgroundProg }}
          ></div>
          <div
            className="w-20 h-1 rounded-4xl"
            style={{ backgroundColor: props.backgroundProg }}
          ></div>
        </div>
        <h1 className="mt-5 font-semibold">{props.heading}</h1>
        <div
          className="box1 mt-8 border-1 border-zinc-600 rounded p-2"
          style={{ backgroundColor: props.backgroundH }}
        >
          <h2 className="font-medium">{props.headingO}</h2>
        </div>
        <div
          className="box2 box1 mt-3 border-1 border-zinc-600 rounded p-2"
          style={{ backgroundColor: props.backgroundH }}
        >
          <h2 className="font-medium ">{props.headingT}</h2>
        </div>
        <div className="bg-white  p-1 text-sm inline absolute bottom-6 border-2 rounded-br-lg rounded-tr-lg rounded-tl-lg">
          told.
        </div>
        <div className="ml-78 mt-8">
          <button className="mt-5 py-1 mr-4 text-sm">Previous</button>
          <button className="mt-5 bg-zinc-800 p-2 rounded-2xl text-white text-sm">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
