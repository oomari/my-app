import React from "react";
import { HomeIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoChevronForwardSharp } from "react-icons/io5";
import { GoHistory } from "react-icons/go";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { SlArrowDown } from "react-icons/sl";
import { LuClock4 } from "react-icons/lu";
import NavBar from "@/components/NavBar";

const Tags = [
  "All",
  "New York Jets",
  "Mixes",
  "Music",
  "Live",
  "Miranda Sings",
  "Gaming",
  "Podcasts",
  "New York Jets",
  "Mixes",
  "Music",
  "Live",
  "Miranda Sings",
  "Gaming",
  "Podcasts",
];

const Videos = [
  {
    id: 1,
    title: "shady fiances caught CHEATING on tiktok - REACTION",
    channel: {
      name: "Charlottle Dobre",
      photoUrl:
        "https://yt3.ggpht.com/bgT46DBGl-pR73SwTVsDoZn1NCPmttrOezRW1EfQv9LRBU-apJtnIn0HyrdFEPnJqwfxTAoU=s68-c-k-c0x00ffffff-no-rj",
    },
    thumbnailUrl:
      "https://i.ytimg.com/vi/7wz6zk6ZyTE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhkuJpz46SoK6IoMW5ngUCzdY6Gw",
    views: 824000,
    createdAt: "",
  },
  {
    id: 1,
    title: "shady fiances caught CHEATING on tiktok - REACTION",
    channel: {
      name: "Charlottle Dobre",
      photoUrl:
        "https://yt3.ggpht.com/bgT46DBGl-pR73SwTVsDoZn1NCPmttrOezRW1EfQv9LRBU-apJtnIn0HyrdFEPnJqwfxTAoU=s68-c-k-c0x00ffffff-no-rj",
    },
    thumbnailUrl:
      "https://i.ytimg.com/vi/7wz6zk6ZyTE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhkuJpz46SoK6IoMW5ngUCzdY6Gw",
    views: 824000,
    createdAt: "",
  },
  {
    id: 1,
    title: "shady fiances caught CHEATING on tiktok - REACTION",
    channel: {
      name: "Charlottle Dobre",
      photoUrl:
        "https://yt3.ggpht.com/bgT46DBGl-pR73SwTVsDoZn1NCPmttrOezRW1EfQv9LRBU-apJtnIn0HyrdFEPnJqwfxTAoU=s68-c-k-c0x00ffffff-no-rj",
    },
    thumbnailUrl:
      "https://i.ytimg.com/vi/7wz6zk6ZyTE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhkuJpz46SoK6IoMW5ngUCzdY6Gw",
    views: 824000,
    createdAt: "",
  },
  {
    id: 1,
    title: "shady fiances caught CHEATING on tiktok - REACTION",
    channel: {
      name: "Charlottle Dobre",
      photoUrl:
        "https://yt3.ggpht.com/bgT46DBGl-pR73SwTVsDoZn1NCPmttrOezRW1EfQv9LRBU-apJtnIn0HyrdFEPnJqwfxTAoU=s68-c-k-c0x00ffffff-no-rj",
    },
    thumbnailUrl:
      "https://i.ytimg.com/vi/7wz6zk6ZyTE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhkuJpz46SoK6IoMW5ngUCzdY6Gw",
    views: 824000,
    createdAt: "",
  },
  {
    id: 1,
    title: "shady fiances caught CHEATING on tiktok - REACTION",
    channel: {
      name: "Charlottle Dobre",
      photoUrl:
        "https://yt3.ggpht.com/bgT46DBGl-pR73SwTVsDoZn1NCPmttrOezRW1EfQv9LRBU-apJtnIn0HyrdFEPnJqwfxTAoU=s68-c-k-c0x00ffffff-no-rj",
    },
    thumbnailUrl:
      "https://i.ytimg.com/vi/7wz6zk6ZyTE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhkuJpz46SoK6IoMW5ngUCzdY6Gw",
    views: 824000,
    createdAt: "",
  },
  {
    id: 1,
    title: "shady fiances caught CHEATING on tiktok - REACTION",
    channel: {
      name: "Charlottle Dobre",
      photoUrl:
        "https://yt3.ggpht.com/bgT46DBGl-pR73SwTVsDoZn1NCPmttrOezRW1EfQv9LRBU-apJtnIn0HyrdFEPnJqwfxTAoU=s68-c-k-c0x00ffffff-no-rj",
    },
    thumbnailUrl:
      "https://i.ytimg.com/vi/7wz6zk6ZyTE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhkuJpz46SoK6IoMW5ngUCzdY6Gw",
    views: 824000,
    createdAt: "",
  },
];

export default function YouTube() {
  return (
    <main className="">
      <NavBar />
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

      <section className="absolute left-48 right-0 top-14 bottom-0 px-8 overflow-y-auto">
        <div className="flex gap-x-2 overflow-x-auto py-3 no-scrollbar">
          {Tags.map((tag) => (
            <button className="bg-gray-100 px-4 py-2 text-sm rounded-xl font-medium whitespace-nowrap scroll">
              {tag}
            </button>
          ))}
        </div>
        <div className="bg-white grid grid-cols-3 gap-x-6 gap-y-10 py-2">
          {Videos.map((video) => (
            <div data-name="video-card" className="flex flex-col gap-y-4">
              <img src={video.thumbnailUrl} className="rounded-xl" />
              <div data-name="video-card-details" className="flex gap-x-3">
                <div className="w-[12.5%]">
                  <img src={video.channel.photoUrl} className="rounded-full" />
                </div>
                <div>
                  {" "}
                  <h1 className="font-medium mb-2">{video.title}</h1>
                  <h3 className="text-sm text-gray-500">
                    {video.channel.name} <br />
                    {video.views} views • 5 months ago
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
