import React from "react";
// import { prettifyNumber } from "./../utils/number";
import { Link } from "react-router-dom";
import ScrollToTop from "./../utils/scrollToTop";

const VideoSuggestionsCard = ({ info }) => {
  // console.log(info);
  const { channelTitle, title, thumbnail } = info;
  // const views = statistics.viewCount;

  return (
    <Link to={"/video?id=" + info.videoId} key={info.videoId}>
      <ScrollToTop />
      <div className="flex flex-row rounded-lg mt-1 bg-neutral-950 transition duration-400 ease-in-out hover:scale-[1.02] hover:shadow-slate-400">
      {/* <div className="flex  rounded-lg mt-2 dark:bg-zinc-900 w-[190px]"> */}
        <img
          className="rounded-lg w-52"
          alt="thumbnail"
          src={thumbnail[1].url}
        />
        <ul key="list">
          <li key="title" className="p-1 text-sm font-bold">
            {title}
          </li>
          <li key="channelTitle" className="px-1 text-xs text-stone-500">
            {channelTitle}
          </li>
          {/* <li className="px-1 text-xs text-stone-500">
            {prettifyNumber(views)} views
          </li> */}
        </ul>
      </div>
    </Link>
  );
};

export default VideoSuggestionsCard;
