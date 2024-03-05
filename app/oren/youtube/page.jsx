import React from "react";
import NavBar from "../../../components/NavBar.jsx";
import SideBar from "../../../components/SideBar.jsx";



export default function Home() {
  return (
    <main>
      <NavBar />
      <SideBar />
      <section className="bg-green-500 absolute left-56 top-14 right-0 bottom-0 overflow-y-auto p-8">
        <div className="h-[10000px] bg-white">Helloooooooooo</div>
      </section>
    </main>
  );
}
