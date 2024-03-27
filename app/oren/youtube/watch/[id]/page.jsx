"use client";
import NavBar from "@/components/NavBar";
import { useParams } from "next/navigation";
import React from "react";
import { useState, useEffect } from "react";

export default function Watch() {
  const [video, setVideo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const resp = await fetch(`/api/videos/${id}`);
      const json = await resp.json();
      const _video = json.video;
      setVideo(_video);
    })();
  }, []);

  return (
    <main>
      <NavBar />
      <div data-name="container" className="flex justify-center ">
        <div data-name="content" className="w-full max-w-6xl flex">
          <section className="bg-blue-100 w-2/3">
            <div className="ml-6 pt-6 pr-6">
              <div className="w-full aspect-video bg-gray-500"></div>
              <h1 className="text-xl font-bold">
                Talkin Jets Draft - OL if Bowers is Picked!
              </h1>
              <div className="flex">
                <div className="flex flex-col ">
                  <h1>Talkin Jets</h1>
                  <h3 className="text-xs ">5.77K...</h3>
                </div>
                <div className="mx-6">
                  <button className="bg-gray-300 border-1 rounded-xl w-10 h-8">
                    Join
                  </button>
                </div>
              </div>
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
