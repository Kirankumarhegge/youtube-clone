import React from "react";
import { prettifyNumber } from "./../utils/number";

const VideoCard = ({ info }) => {
  // console.log(info);

  // const views = statistics.viewCount;

  return (
    <div>
      <div className="relative">
        <img className="rounded-lg w-full" src={info.thumbnail[2].url} alt="thumbnail" />
        <span className="absolute bottom-1 right-1 rounded-md py-[0.1rem] px-[0.3rem] bg-neutral-950 text-xs">{info.lengthText}</span>
      </div>
      <div className="flex w-[100%] items-start">
        <img className="rounded-full w-10 h-10 mt-3" src={info.channelThumbnail[0].url} alt="thumbnail" />
        <div className="ml-4">
          <p className="font-bold lg:w-[100%] md:w-[90%] sm:w-[70%] pt-2 line-clamp-2">{info.title}</p>
          <p className="text-gray-400 text-sm">{info.channelTitle}</p>
          <p className="text-gray-400 text-sm">{prettifyNumber(info.viewCount)} views • {info.publishedText}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;


<span className="text-sm">12:30 PM</span>