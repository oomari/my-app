"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";

// these two are the same
// import svg from "../public/next.svg"; // relative path
// import svg from "@/public/next.svg"; // absolute path

export default function Home() {
  const [count, setCount] = useState(0);
  /*
  function add() {
    setCount((prevState) => prevState + 1);
    console.log(count);
  }
  */

  return (
    <main className="bg-blue-400 h-screen flex p-6">
      <div className="bg-white w-1/2 p-4">This is my counter</div>
      <div className="bg-red-500 w-1/2 flex flex-col items-center pt-20 relative">
        <h1 className="size-40 bg-gray-400 rounded-full text-6xl flex justify-center items-center mx-auto">
          {count}
        </h1>
        <div className="flex gap-10 absolute pt-28">
          <button
            onClick={() => setCount((prevState) => prevState - 1)}
            className="bg-white size-16 rounded-full text-3xl"
          >
            -
          </button>
          <button
            onClick={() => setCount((prevState) => prevState + 1)}
            className="bg-white size-16 rounded-full text-3xl "
          >
            +
          </button>
        </div>
      </div>
    </main>
  );
}
