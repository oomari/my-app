import Image from "next/image";

// these two are the same
// import svg from "../public/next.svg"; // relative path
// import svg from "@/public/next.svg"; // absolute path
import React from "react";

export default function Home() {
  return (
    <main className="bg-blue-400 h-screen flex p-6">
      <div className="bg-green-500 w-1/2 p-4">This is my counter</div>
      <div className="bg-red-500 w-1/2 p-20">
        this is a test for flex
        <div>counter</div>
      </div>
    </main>
  );
}
