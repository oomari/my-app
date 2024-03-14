'use client'
import React, {useEffect, useState} from "react";
import NavBar from "../../../components/NavBar.jsx";
import SideBar from "../../../components/SideBar.jsx";
import millify from "millify";

export default function Home() {
  const [videos, setVideos] = useState([])
  const [tags, setTags] = useState([])

  useEffect(() => {
    (async () => {
      const resp = await fetch('/api/tags');
      const json = await resp.json();
      const _tags = json.tags;
      setTags(_tags);
      console.log(_tags)
    })();
  }, [])


  useEffect(() => {
    (async () => {
      const resp = await fetch('/api/videos');
      const json = await resp.json();
      const _videos = json.videos;
      setVideos(_videos);
    })();
  }, [])
  

  

  return (
    <main>
      <NavBar />
      <SideBar />
      <section className="bg-white absolute left-56 top-14 right-0 bottom-0 overflow-y-auto px-8">
        <div className="flex gap-x-2 overflow-x-auto no-scrollbar py-2">
          {tags.map((tag) => (
            <button className="bg-gray-100 px-4 py-2 rounded-xl whitespace-nowrap font-medium text-sm ">
              {tag}
            </button>
          ))}
        </div>
        <div className="bg-white grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-10 py-2">
          {videos.map((video) => (
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
