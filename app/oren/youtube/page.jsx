import React from "react";
import NavBar from "../../../components/NavBar.jsx";
import SideBar from "../../../components/SideBar.jsx";

export default function Home() {
  return (
    <main>
      <NavBar />
      <SideBar />
      <section className="bg-green-500 absolute left-48 right-0 top-14 bottom-0 p-8 overflow-y-auto">
        <div className="h-[10000px] bg-white">hellooooooooo</div>
      </section>
    </main>
  );
}
