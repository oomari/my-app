import Image from "next/image";

// these two are the same
// import svg from "../public/next.svg"; // relative path
// import svg from "@/public/next.svg"; // absolute path
import React from "react";

export default function Home() {
  return (
    <main className="bg-blue-400 h-screen flex p-6">
      <div className="bg-green-500 w-1/2 p-4">This is my counter</div>
      <div className="bg-gray-300 w-1/2 p-4 flex flex-col item-center pt-20 relative">
        <h1 className="text-6xl bg-white size-40 flex justify-center items-center rounded-full mx-auto">
          8
        </h1>
        <div className="flex gap-x-10 absolute top-52 left-1/2 -translate-x-1/2">
          {/* default: div's display block */}
          <button className="bg-orange-100 text-4xl rounded-full size-16">
            -
          </button>
          <button className="bg-orange-100 text-4xl rounded-full size-16">
            +
          </button>
        </div>
        {/* <div className="absolute top-44 left-1/2 -translate-x-1/2">
          Position me top right
        </div> */}
      </div>
    </main>
  );
}
