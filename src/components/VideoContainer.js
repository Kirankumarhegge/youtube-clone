import React, { useEffect, useState } from "react";
import { baseUrl } from "./../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const param = "/trending";


const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

const reqParam = `${baseUrl + param}` 

  const getVideos = async () => {
    // const data = await fetch(YOUTUBE_API_KEY);
    const data = await fetch(reqParam, {
      method: 'GET', // Replace with the appropriate HTTP method (GET, POST, etc.)
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': "adc29b9376msh1b0091298035bd7p168ba0jsn53e514376d50", // Replace with the actual value for x-auth-id
      },
    })
    
    const jsonData = await data.json();
    // console.log(jsonData)
    setVideos(jsonData.data);
  };
  // conditional rendering


  

  if (!videos.length) {
    return <Shimmer />;
  }

  return (
    <div className="flex justify-center items-center pt-3 bg-neutral-950">
      <div className="flex-1 max-w-7xl">
        <div className="grid p-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4" >
          {videos.map((video) => (
            <Link to={"/video?id=" + video.videoId}>
              <VideoCard key={video.id} info={video} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
 