"use client";
import React, { useEffect, useState } from "react";

export default function ItineraryBox(props) {
  // Pull text from local storage if it exists otherwise set text to null
  const [text, setText] = useState("");

  useEffect(() => {
    setText(localStorage.getItem(props.time));

    // when component unmounts, clear localStorage
    return () => {
      // console.log("component unmounted");
    };
  }, []);

  /**
   * Store text into local storage.
   * @param {*} event
   */
  function handleClick(event) {
    localStorage.setItem(props.time, text);
  }

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div className="flex w-full h-24">
      <div className="bg-white w-1/6 flex items-center justify-center">
        {props.time}
      </div>
      <textarea
        value={text}
        placeholder="Enter some text"
        onChange={handleChange}
        className="bg-gray-200 h-full w-4/6"
      />
      <button
        onClick={handleClick}
        className="bg-green-500 w-1/6 flex items-center justify-center"
      >
        Save
      </button>
    </div>
  );
}
