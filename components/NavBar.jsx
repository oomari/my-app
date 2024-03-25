import React from "react";
import { Bars3Icon, UserIcon } from "@heroicons/react/24/solid";
import { BiSolidMicrophone } from "react-icons/bi";
import { IoIosSearch, IoMdNotificationsOutline } from "react-icons/io";
import YoutubeLogo from "/public/youtube_logo.png";
import Image from "next/image";
import { MdVideoCameraFront } from "react-icons/md";

export default function NavBar() {
  return (
    <nav className="h-14 bg-white sticky top-0 left-0 right-0 flex items-center justify-between px-4 md:px-6 overflow-hidden">
      <div className="flex items-center gap-x-4">
        <Bars3Icon className="h-6" />
        <Image src={YoutubeLogo} className="w-28" alt="Youtube Logo" />
      </div>
      <div className="flex items-center w-1/2 gap-x-4">
        <SearchInput />
        <BiSolidMicrophone className="size-6" />
      </div>
      <div
        data-name="right-buttons"
        className="flex items-center justify-between gap-4"
      >
        <MdVideoCameraFront className="size-6" />
        <IoMdNotificationsOutline className="size-6" />
        <UserIcon className="size-7" />
      </div>
    </nav>
  );
}

function SearchInput() {
  return (
    <div data-name="search-input" className="relative w-full">
      <input
        type="text"
        className="w-full h-10 border-2 rounded-full pl-4 pr-10"
      />
      <IoIosSearch className="absolute right-4 top-1/2 -translate-y-1/2" />
    </div>
  );
}
