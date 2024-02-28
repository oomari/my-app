import React from "react";
import { HomeIcon } from "@heroicons/react/24/solid";

export default function SideBar() {
  return (
    <aside className="bg-white w-48 fixed left-0 top-14 bottom-0">
      <div className="flex flex-col p-2">
        <button className="flex items-center px-3 py-2 gap-x-3 hover:bg-gray-100 rounded-xl text-sm">
          <HomeIcon className="size-6 w-1/5" />
          Home
        </button>
        <button className="flex items-center px-3 py-2 gap-x-3 hover:bg-gray-100 rounded-xl text-sm">
          <HomeIcon className="size-6 w-1/5" />
          Home
        </button>
        <button className="flex items-center px-3 py-2 gap-x-3 hover:bg-gray-100 rounded-xl text-sm">
          <HomeIcon className="size-6 w-1/5" />
          Home
        </button>
      </div>
      <hr className="border-gray-300" />
      <div></div>
    </aside>
  );
}
