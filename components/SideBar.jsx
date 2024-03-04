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
      </div>
    </aside>
  );
}
