"use client";
import NavBar from "@/components/NavBar";
import React from "react";

export default function Watch() {
  return (
    <main>
      <NavBar />
      <section className="bg-blue-100 flex absolute top-14 bottom-0 left-0 right-0">
        <div className="bg-blue-400 w-2/3  ">
          <div className="bg-white absolute top-8 left-16 right-32 w-1/2 h-1/2"></div>
        </div>
        <div className="bg-green-400 w-1/3  "></div>
      </section>
    </main>
  );
}
