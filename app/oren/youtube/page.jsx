import React from "react";
import NavBar from "../../../components/NavBar.jsx";
import SideBar from "../../../components/SideBar.jsx";
import millify from "millify";

export default function Home() {
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
      createdAt: "5 months ago",
    },
    {
      id: 2,
      title: "Talkin Jets Draft - NFL Combine Recap & Mock Draft!",
      channel: {
        name: "Talkin Jets",
        photoUrl:
          "https://yt3.ggpht.com/3hdtq7MDX9tLe0FDok1fbi_2SvXnZGrvHQKuLL6zknERhHH_MaQqruuz8Zxyg15jLWazQmcV2g=s68-c-k-c0x00ffffff-no-rj",
      },
      thumbnailUrl:
        "https://i.ytimg.com/vi/akoAE47krt4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBT0RhykvmymbpGCN-42qBYMNEA_Q",
      views: 24000,
      createdAt: "2 days ago",
    },
    {
      id: 3,
      title:
        "New WR Hits the Trade Market and the New York Jets Should be All Over It!",
      channel: {
        name: "Matt O'Leary",
        photoUrl:
          "https://yt3.ggpht.com/tMCgP0E_2g9p_B70OuxeR4gBj_HNQkTlHXvlqLqWMBhoBWIbzsPhtIAle3ljauTFmaMZstWeHw=s68-c-k-c0x00ffffff-no-rj",
      },
      thumbnailUrl:
        "https://i.ytimg.com/vi/1FJfxk8PINI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDRc3-rnPPFtXUOLXhmPCdX6iLgeA",
      views: 348,
      createdAt: "4 hours ago",
    },
    {
      id: 4,
      title: "I Found The RAREST Car From The '80s To Detail!",
      channel: {
        name: "The Detail Geek",
        photoUrl:
          "https://yt3.ggpht.com/ytc/AIdro_mmtKfWnRRhqK_ixTHwXd_8qMwTGCCKYsXnN51Jkw=s68-c-k-c0x00ffffff-no-rj",
      },
      thumbnailUrl:
        "https://i.ytimg.com/vi/4sEm5WvUWE8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyBIQW0-PL4ukWzavoI_H3IIsfIg",
      views: 4300000,
      createdAt: "4 months ago",
    },
    {
      id: 5,
      title: "CRISPY TAKEOUT ORANGE CHICKEN (No Wok Required)",
      channel: {
        name: "Brian Lagerstrom",
        photoUrl:
          "https://yt3.ggpht.com/KjDIyl35dMJkP7TWdaMWSzGIwu5speTP9yXkMJlaxjzBVmGlAN2Gr88ssLcF5Mit_JPYyxuv-A=s68-c-k-c0x00ffffff-no-rj",
      },
      thumbnailUrl:
        "https://i.ytimg.com/vi/tVlx27mBCmo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLByp6Vpv8fH-OCNJ0LjainE5FJ1hg",
      views: 1600000,
      createdAt: "1 year ago",
    },
    {
      id: 6,
      title:
        "Journalist Abigail Shrier on Gen Z's Anxiety Problem and Why Therapy May Not Be the Solution",
      channel: {
        name: "PowerfulJRE",
        photoUrl:
          "https://yt3.ggpht.com/ytc/AIdro_ngyFhR8IKCPHaYFjOj4hk5ayuAnmBWO1fQBcFYJA=s68-c-k-c0x00ffffff-no-rj",
      },
      thumbnailUrl:
        "https://i.ytimg.com/vi/z72hgYk-5iI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnKZicODOnvFa0TgX6lnp-NMmvwA",
      views: 1200000,
      createdAt: "2 weeks ago",
    },
  ];

  return (
    <main>
      <NavBar />
      <SideBar />
      <section className="bg-white absolute left-56 top-14 right-0 bottom-0 overflow-y-auto px-8">
        <div className="flex gap-x-2 overflow-x-auto no-scrollbar py-2">
          {Tags.map((tag) => (
            <button className="bg-gray-100 px-4 py-2 rounded-xl whitespace-nowrap font-medium text-sm ">
              {tag}
            </button>
          ))}
        </div>
        <div className="bg-white grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-10 py-2">
          {Videos.map((video) => (
            <div data-name="video-card" className="flex flex-col gap-y-3">
              <img src={video.thumbnailUrl} className="rounded-xl" />
              <div data-name="video-card-details" className="flex gap-x-3">
                <div className="w=[12.5%]">
                  <img
                    src={video.channel.photoUrl}
                    className="rounded-full size-10"
                  />
                </div>
                <div>
                  <h1 className="font-medium mb-2">{video.title}</h1>
                  <h3 className="text-sm text-gray-500">
                    {video.channel.name}
                    <br />
                    {millify(video.views)} views • {video.createdAt}
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
