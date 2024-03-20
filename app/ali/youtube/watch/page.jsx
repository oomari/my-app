"use client";
import NavBar from "@/components/NavBar";
import React from "react";

export default function Watch() {
  return (
    <main>
      <NavBar />
      <div data-name="container" className="flex justify-center">
        <div data-name="content" className="w-full max-w-3xl flex">
          <section className="w-2/3 h-64 bg-blue-500"></section>
          <section className="w-1/3 h-64 bg-red-500"></section>
        </div>
      </div>
    </main>
  );
}
