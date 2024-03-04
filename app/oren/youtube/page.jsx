import React from "react";
import NavBar from "../../../components/NavBar.jsx";
import SideBar from "../../../components/SideBar.jsx";

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

export default function Home() {
  return (
    <main>
      <NavBar />
      <SideBar />
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
