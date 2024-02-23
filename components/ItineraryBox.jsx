"use client";
import React, { useState } from "react";

export default function ItineraryBox(props) {
  const [myState, setmyState] = useState("hi");

  function clicked(event) {
    const newValue = event.target;
    setmyState((prevState) => (prevState += newValue));
    //localStorage.setItem(props.time, myState);
    console.log(myState);
  }

  return (
    <div className="flex w-full h-24">
      <div className="bg-white w-1/6 flex items-center justify-center">
        {props.time}
      </div>
      <textarea
        value={myState}
        onChange={clicked}
        className="bg-gray-200 h-full w-4/6"
      />
      <button
        onClick={clicked}
        className="bg-green-500 w-1/6 flex items-center justify-center"
      >
        Save
      </button>
    </div>
  );
}
