import React, { useEffect, useState } from "react";
import VideoSuggestionsCard from "./VideoSuggestionsCard";
import { useSearchParams } from "react-router-dom";

const WatchPageVideos = () => {
  const [searchParams] = useSearchParams();

  const videoId = searchParams.get("id");
  const [relatedVideoData, setRelatedVideoData] = useState([]);

  const getRelatedVideos = () => {
    fetch(
      `https://youtube-v3-alternative.p.rapidapi.com/related?id=${videoId}`,
      {
        method: 'GET', // Replace with the appropriate HTTP method (GET, POST, etc.)
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': 'adc29b9376msh1b0091298035bd7p168ba0jsn53e514376d50', // Replace with the actual value for x-auth-id
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log("-----------------");
        // console.log(data.data);
        setRelatedVideoData(data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getRelatedVideos();
    // eslint-disable-next-line
  }, [videoId]);

  if (!relatedVideoData?.length) {
    return null;
  }

  return (
    <>
      <div className="ml-6 mt-4 mr-6 py-2 w-[450px] bg-neutral-950">
        {relatedVideoData.map((v) => (
          <VideoSuggestionsCard info={v} />
        ))}
      </div>
    </>
  );
};

export default WatchPageVideos;
