import React from "react";
import {
  MdHomeFilled,
  MdOutlineSubscriptions,
  MdOutlineManageHistory,
  MdOutlineSlowMotionVideo,
  MdOutlineVideoLibrary,
} from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { FaRegThumbsUp } from "react-icons/fa";
import { IoImagesSharp } from "react-icons/io5";

export default function () {
  const mainLinks = [
    {
      icon: <MdHomeFilled />,
      name: "Home",
    },
    {
      icon: <SiYoutubeshorts />,
      name: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions />,
      name: "Subscription",
    },
  ];

  const otherLinks = [
    {
      icon: <IoImagesSharp />,
      name: "Your Channel",
    },
    {
      icon: <MdOutlineVideoLibrary />,
      name: "Library",
    },
    {
      icon: <MdOutlineManageHistory />,
      name: "History",
    },
    {
      icon: <MdOutlineSlowMotionVideo />,
      name: "Watch Later",
    },
    {
      icon: <FaRegThumbsUp />,
      name: "Liked video",
    },
  ];

  return (
    <div className="w-2/12 bg-[#212121] pr-5 overflow-auto pb-8 h-screen p-2">
      <ul className="flex flex-col border-b-2 pb-3">
        {mainLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`pl-6 py-3 hover:bg-zinc-600 rounded-xl ${
                name === "Home" ? "bg-slate-600" : " "
              }rounded-xl`}
            >
              <a href="#" className="flex items-center gap-5 text-xl">
                {icon} <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b-2 pb-3 pt-3">
        {otherLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`pl-6 py-3 hover:bg-zinc-600 rounded-xl ${
                name === "Home" ? "bg-slate-600" : " "
              }rounded-xl`}
            >
              <a href="#" className="flex items-center gap-5">
                {icon} <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
