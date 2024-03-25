"use client";
import NavBar from "@/components/NavBar";
import React from "react";

export default function Watch() {
  return (
    <main>
      <NavBar />
      <div data-name="container" className="flex justify-center ">
        <div data-name="content" className="w-full max-w-6xl flex">
          <section className="bg-blue-100 w-2/3">
            <div className="ml-6 pt-6 pr-6">
              <div className="w-full aspect-video bg-gray-500"></div>
              <h3>Title</h3>
              <h3>Title</h3>
              <h3>Title</h3>
              <h3>Title</h3>
              <h3>Title</h3>
              <h3>Title</h3>
              <h3>Title</h3>
              <h3>Title</h3>
              <h3>Title</h3>
              <h3>Title</h3>
              <h3>Title</h3>
              <h3>Title</h3>
              <h3>Title</h3>
            </div>
          </section>
          <section className="bg-green-100 w-1/3 pt-6 pr-6"></section>
        </div>
      </div>
    </main>
  );
}
