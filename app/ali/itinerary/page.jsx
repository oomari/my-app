import Image from "next/image";

// these two are the same
// import svg from "../public/next.svg"; // relative path
// import svg from "@/public/next.svg"; // absolute path
import React from "react";

export default function Home() {
  const a = [];
  const a2 = new Array();
  const a3 = Array.from([1, 2, 3, 4]);
  const a4 = Array();
  const rows = [];
  for (let index = 0; index < 7; index++) {
    rows.push(
      <div className="bg-white w-full h-24 flex">
        <div className="w-1/6 flex justify-center items-center">8am</div>
        <textarea className="h-full bg-gray-100 w-4/6" />
        <button className="bg-green-500 w-1/6 flex items-center justify-center">
          Save
        </button>
      </div>
    );
  }
  return <main className="bg-blue-400 flex flex-col p-6 gap-y-2">{rows}</main>;
}
