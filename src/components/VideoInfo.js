import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { publishedAt as publishedAtFunc } from "../utils/publisedAt";
import { prettifyNumber } from "./../utils/number";
import { BiLike, BiDislike } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia"
import { Link } from "react-router-dom";

const VideoInfo = () => {
  const [videoInfo, setVideoInfo] = useState(null);
  const [channelID, setChannelID] = useState();
  const [channelInfo, setChannelInfo] = useState();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("id");
  const [moreEnabled, setMoreEnabled] = useState(false);

  useEffect(() => {
    const getVideoInfo = async () => {
      const res = await fetch(`https://youtube-v3-alternative.p.rapidapi.com/video?id=${videoId}`,
      {
        method: 'GET', // Replace with the appropriate HTTP method (GET, POST, etc.)
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': 'adc29b9376msh1b0091298035bd7p168ba0jsn53e514376d50', // Replace with the actual value for x-auth-id
        },
      });
      const json = await res.json();
      setVideoInfo(json);
      setChannelID(json?.channelId);
      // console.log(json);
    };
    getVideoInfo();

    
  }, [videoId]);

  useEffect(() => {
    const getChannel = async () => {
      const res = await fetch(`https://youtube-v3-alternative.p.rapidapi.com/channel?id=${channelID}`,
      {
        method: 'GET', // Replace with the appropriate HTTP method (GET, POST, etc.)
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': 'adc29b9376msh1b0091298035bd7p168ba0jsn53e514376d50', // Replace with the actual value for x-auth-id
        },
      });
      const json = await res.json();
      setChannelInfo(json.meta);
      // console.log(json.meta);
    };
    getChannel();
  }, [channelID])

  // console.log(channelID);
  // console.log(videoInfo);

  // "|| returns true if one or both expressions are true, otherwise it returns false."
  const description = videoInfo?.description || "";
  
  // console.log(channelInfo)
  return (
    <div className="flex flex-col bg-neutral-950">
      <h1 className="font-bold text-xl">
        {videoInfo?.title}
      </h1>
      
      <div className="flex justify-between items-center mt-2">
        <Link to={"https://www.youtube.com/@" + channelInfo?.title }>
          <div className="flex items-center">
          
            {channelInfo?.thumbnail && (
              <img
                className="h-12 w-12 object-cover rounded-full"
                src={channelInfo?.thumbnail[2].url}
                alt="channelIcon"
              />
            )}
            <div className="flex-col">
              <h2 className="font-semibold ml-2">
                {channelInfo?.title}
              </h2>
              <h5 className="ml-2 font-semibold text-sm text-gray-400">
                {channelInfo?.subscriberCount}{" "}
                subscribers
              </h5>
            </div>
            <button className="ml-4 h-9 bg-gray-100 font-semibold  text-black rounded-full px-4 py-0">
              Subscribe
            </button>
          </div>
        </Link>
        <div>
          <h2 className="flex justify-end ml-5">
            <button className="flex justify-center items-center ml-8 h-9 bg-zinc-700 font-normal text-white rounded-full px-4 py-0">
              <span className="h-5 w-5 mr-2">
                <BiLike />
              </span>
              <span className="mr-2">|</span>
              <span className="h-5 w-5 mt-1">
                <BiDislike />
              </span>
            </button>
            <button className="ml-4 h-9 bg-zinc-700 font-normal text-white rounded-full px-4 py-0">
            <div className="flex pt-1">
            <PiShareFatLight className="h-7 w-5 mr-1" />
              Share
              </div>  
            </button>
            <button className="ml-4 h-9 bg-zinc-700 font-normal text-white rounded-full  px-5 py-0">
              <div className="flex">
                <LiaDownloadSolid className="h-6 w-5 mr-1"/>
                Download
              </div>
            </button>
            <button className="ml-4 h-9 bg-zinc-700 font-normal text-white rounded-full  px-2 py-0">
            •••
            </button>
          </h2>
        </div>
      </div>
      
      <div className="flex flex-col rounded-lg p-4 mt-3 dark:bg-zinc-700 text-sm">
        <div className="flex font-medium dark:bg-zinc-700">
          <h2>
            {" "}
            {prettifyNumber(videoInfo?.viewCount)} views
          </h2>
          <h2 className="ml-4">
            {publishedAtFunc(videoInfo?.publishDate)}
          </h2>
        </div>
        <div className=" whitespace-pre-line  scroll-hide">
          {/* {videoInfo?.items[0]?.snippet?.description} */}
          {moreEnabled ? description : description.slice(0, 150)}
          <h1
            className="cursor-pointer text-blue-600"
            onClick={() => setMoreEnabled((bool) => !bool)}
          >
            {moreEnabled ? " ...Show Less" : "...Show More"}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
