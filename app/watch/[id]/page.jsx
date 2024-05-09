"use client";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import { useState, useEffect } from "react";
import millify from "millify";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function Watch() {
  const [video, setVideo] = useState({});
  const [suggestedVideos, setSuggestedVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const resp = await fetch(`/api/videos/${id}`);
      const json = await resp.json();
      const _video = json;
      setVideo(_video);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const resp = await fetch("/api/videos");
      const json = await resp.json();
      const _videos = json.videos;
      setSuggestedVideos(_videos);
    })();
  }, []);

  return (
    <main>
      <NavBar />
      <div data-name="container" className="flex w-full  ">
        <div data-name="content" className="w-full max-w-7xl mx-auto flex">
          <section className="w-full lg:w-2/3">
            <div className="ml-6 pt-6 pr-6">
              <div className="relative w-full rounded-lg aspect-video bg-gray-500">
                <Image src={video.thumbnailUrl} className="rounded-lg" fill />
              </div>
              <h1 className="text-xl my-3 font-bold">{video.title}</h1>

              <div className="flex flex-col gap-y-2  sm:flex-row justify-between">
                <div className="flex">
                  <div className="relative size-10 flex flex-none">
                    <Image
                      src={video.channel?.photoUrl}
                      className="rounded-full"
                      fill
                    />
                  </div>
                  <div className="ml-2 flex flex-col ">
                    <h1 className="whitespace-nowrap font-semibold">
                      {video.channel?.name}
                    </h1>
                    <h3 className="text-xs text-gray-500">
                      {millify(video.views)} views
                    </h3>
                  </div>
                  <div className="mx-6 flex gap-x-1">
                    <button className="bg-gray-100 hover:bg-gray-200 border-1 text-sm font-semibold rounded-full w-16 h-9">
                      Join
                    </button>
                    <button className="bg-black text-white border-1 hover:bg-gray-200 text-sm font-semibold rounded-full w-24 h-9">
                      Subscribe
                    </button>
                  </div>
                </div>

                <div className="flex gap-x-2">
                  <div className="flex items-center justify-center rounded-full border-1 w-32 h-9 bg-gray-100 hover:bg-gray-200 gap-x-2">
                    <button className="flex gap-x-2 ">
                      <BiLike className="size-5 " />
                      <div className="text-sm font-medium">{millify(5400)}</div>
                    </button>
                    <div className="w-[1px] bg-gray-300 h-[70%]"></div>
                    <button>
                      <BiDislike className="size-5" />
                    </button>
                  </div>
                  <button className="bg-gray-100 hover:bg-gray-200 w-24 h-9 rounded-full font-semibold text-sm flex items-center justify-center gap-x-2">
                    <PiShareFatLight className="size-5" /> Share
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 rounded-full hidden md:block lg:hidden xl:block w-[35%] h-9">
                    <div className="flex items-center justify-center gap-x-2">
                      <LiaDownloadSolid className="size-5" />
                      <div className=" text-sm font-semibold ">Download</div>
                    </div>
                  </button>

                  <button className="flex justify-center rounded-full bg-gray-100 hover:bg-gray-200 size-9 text-xl">
                    ...
                  </button>
                </div>
              </div>
              <Description text={video.description} />
            </div>
          </section>
          <section className="hidden lg:flex lg:w-1/3 pt-6 pr-6 h-[1000px] overflow-y-auto">
            <div
              data-name="video cards"
              className="gap-y-4 w-full flex flex-col"
            >
              {suggestedVideos.map((video) => (
                <div data-name="video-card" className="flex group">
                  <Link
                    href={`/oren/youtube/watch/${video.id}`}
                    className="flex gap-x-2 items-start"
                  >
                    <img
                      src={video.thumbnailUrl}
                      className="rounded-md w-[53%] object-contain"
                    />

                    <div className="flex flex-col w-[42%] gap-1">
                      <h1 className="text-xs font-semibold line-clamp-2 ">
                        {video.title}
                      </h1>
                      <h2 className="text-xs text-gray-600">
                        {video.channel.name}
                      </h2>
                      <h3 className="text-xs text-gray-600">
                        {millify(video.views)} views • {video.createdAt}
                      </h3>
                    </div>
                  </Link>
                  <div className="w-[5%]">
                    {
                      <HiOutlineDotsVertical className="invisible group-hover:visible" />
                    }
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function Description({ text }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (event) => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={twMerge(
        "bg-gray-200 rounded-lg p-2 mt-4 active:bg-gray-300",
        !isOpen && "hover:cursor-pointer"
      )}
      onClick={handleClick}
    >
      <p
        className={twMerge(
          "text-sm whitespace-pre-wrap break-words",
          !isOpen && "line-clamp-4"
        )}
      >
        {text}
      </p>

      <button onClick={handleClick} className="font-medium pl-4 text-sm">
        ...{isOpen ? "show less" : "more"}
      </button>
    </div>
  );
}
