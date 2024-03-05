import React from "react";
import { HomeIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoChevronForwardSharp } from "react-icons/io5";
import { GoHistory } from "react-icons/go";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { SlArrowDown } from "react-icons/sl";
import { LuClock4 } from "react-icons/lu";

export default function SideBar() {
  return (
    <aside className="bg-white w-48 fixed left-0 top-14 bottom-0">
      <div className="flex flex-col p-2">
        <button className="flex px-3 py-2 items-center gap-x-5 rounded-xl text-sm hover:bg-gray-100">
          <HomeIcon className="w-1/5 size-6"/>
          Home
        </button>
        <button className="flex px-3 py-2 items-center gap-x-5 rounded-xl text-sm hover:bg-gray-100">
          <SiYoutubeshorts className="w-1/5 size-6"/>
          Shorts
        </button>
        <button className="flex px-3 py-2 items-center gap-x-5 rounded-xl text-sm hover:bg-gray-100">
          <MdOutlineSubscriptions className="w-1/5 size-6"/>
          Subscriptions
        </button>
      </div>
      <hr className="bg-gray-100"/>
      <div className="flex flex-col p-2">
        <h1 className="mx-4 flex items-center">
          You
          <IoChevronForwardSharp className="mx-2 size-4"/>
        </h1>
        <button className="flex px-3 py-2 items-center gap-x-5 rounded-xl text-sm hover:bg-gray-100">
          <UserCircleIcon className="w-1/5 size-6"/>
          Your channel
        </button>
        <button className="flex px-3 py-2 items-center gap-x-5 rounded-xl text-sm hover:bg-gray-100">
          <GoHistory className="w-1/5 size-6"/>
          History
        </button>
        <button className="flex px-3 py-2 items-center gap-x-5 rounded-xl text-sm hover:bg-gray-100">
          <AiOutlinePlaySquare className="w-1/5 size-6"/>
          Your videos
        </button>
        <button className="flex px-3 py-2 items-center gap-x-5 rounded-xl text-sm hover:bg-gray-100">
          <LuClock4 className="w-1/5 size-6"/>
          Watch later
        </button>
        <button className="flex px-3 py-2 items-center gap-x-5 rounded-xl text-sm hover:bg-gray-100">
          <SlArrowDown className="w-1/5 size-3"/>
          Show more
        </button>
      </div>
      <hr className="bg-gray-100"/>
      <div className="flex flex-col p-2">
        <h1 className="mx-4 flex items-center font-bold text-sm">
          Subscriptions
        </h1>
        <button className="flex px-3 py-2 items-center gap-x-5 rounded-xl text-sm hover:bg-gray-100">
          <img 
          src="https://yt3.ggpht.com/tMCgP0E_2g9p_B70OuxeR4gBj_HNQkTlHXvlqLqWMBhoBWIbzsPhtIAle3ljauTFmaMZstWeHw=s88-c-k-c0x00ffffff-no-rj" 
          className="w-1/5 rounded-full"/>
          Matt O'Leary
        </button>
        <button className="flex px-3 py-2 items-center gap-x-5 rounded-xl text-sm hover:bg-gray-100">
          <GoHistory className="w-1/5 size-6"/>
          Jets Talk 24/7
        </button>
        <button className="flex px-3 py-2 items-center gap-x-5 rounded-xl text-sm hover:bg-gray-100">
          <AiOutlinePlaySquare className="w-1/5 size-6"/>
          RealBreakingNate
        </button>
        <button className="flex px-3 py-2 items-center gap-x-5 rounded-xl text-sm hover:bg-gray-100">
          <LuClock4 className="w-1/5 size-6"/>
          Just One Cookbook
        </button>
        <button className="flex px-3 py-2 items-center gap-x-5 rounded-xl text-sm hover:bg-gray-100">
          <LuClock4 className="w-1/5 size-6"/>
          PowerfulJRE
        </button>
        <button className="flex px-3 py-2 items-center gap-x-5 rounded-xl text-sm hover:bg-gray-100">
          <LuClock4 className="w-1/5 size-6"/>
          Bro Code
        </button>
        <button className="flex px-3 py-2 items-center gap-x-5 rounded-xl text-sm hover:bg-gray-100">
          <LuClock4 className="w-1/5 size-6"/>
          GREENBEANJETSFAN 
        </button>
        <button className="flex px-3 py-2 items-center gap-x-5 rounded-xl text-sm hover:bg-gray-100">
          <SlArrowDown className="w-1/5 size-3"/>
          Show 12 more
        </button>
      </div>
      <hr className="bg-gray-100"/>
    </aside>
  );
}
