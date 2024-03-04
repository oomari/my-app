import React from "react";
import { HomeIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoChevronForwardSharp } from "react-icons/io5";
import { GoHistory } from "react-icons/go";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { SlArrowDown } from "react-icons/sl";
import { LuClock4 } from "react-icons/lu";

export default function YouTube() {
  return (
    <main className="">
      <nav className="bg-blue-500 h-14 fixed left-0 right-0"></nav>
      <aside className="bg-white w-48 fixed left-0 top-14 bottom-0">
      <div className="flex flex-col p-2">
        <button className="flex items-center px-3 py-2 gap-x-5 hover:bg-gray-100 rounded-xl text-sm">
          <HomeIcon className="size-6 w-1/5" />
          Home
        </button>
        <button className="flex items-center px-3 py-2 gap-x-5 hover:bg-gray-100 rounded-xl text-sm">
          <SiYoutubeshorts className="size-6 w-1/5" />
          Shorts
        </button>
        <button className="flex items-center px-3 py-2 gap-x-5 hover:bg-gray-100 rounded-xl text-sm">
          <MdOutlineSubscriptions className="size-6 w-1/5" />
          Subscriptions
        </button>
      </div>
      <hr className="border-gray-300" />
      <div className="flex flex-col p-2">
        <h1 className="mx-4 flex items-center">
          You
          <IoChevronForwardSharp className="size-4 mx-2" />
        </h1>
        <button className="flex items-center px-3 py-2 gap-x-5 hover:bg-gray-100 rounded-xl text-sm">
          <UserCircleIcon className="size-6 w-1/5" />
          Your channel
        </button>
        <button className="flex items-center px-3 py-2 gap-x-5 hover:bg-gray-100 rounded-xl text-sm">
          <GoHistory className="size-6 w-1/5" />
          History
        </button>
        <button className="flex items-center px-3 py-2 gap-x-5 hover:bg-gray-100 rounded-xl text-sm">
          <AiOutlinePlaySquare className="size-6 w-1/5" />
          Your videos
        </button>
        <button className="flex items-center px-3 py-2 gap-x-5 hover:bg-gray-100 rounded-xl text-sm">
          <LuClock4 className="size-6 w-1/5" />
          Watch later
        </button>
        <button className="flex items-center px-3 py-2 gap-x-5 hover:bg-gray-100 rounded-xl text-sm">
          <SlArrowDown className="size-4 w-1/5" />
          Show more
        </button>
      </div>
      <hr className="border-gray-300" />
    </aside>
      <section className="bg-green-500 absolute left-48 top-14 right-0 bottom-0 overflow-y-auto p-8">
        <div className="h-[10000px] bg-white">Helloooooooooo</div>
      </section>
    </main>
  );
}
