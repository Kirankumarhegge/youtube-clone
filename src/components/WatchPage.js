import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import Comments from "./Comments";
import WatchPageVideos from "./WatchPageVideos";
import VideoInfo from "./VideoInfo";
// import CommentsThread from "./CommentsThread";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [comments, setComments] = useState([]);

  const [searchParams] = useSearchParams();
  // console.log("video id: ",searchParams.get("id"));
  const videoId = searchParams.get("id");

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const getComments = async () => {
    const data = await fetch(
        `https://youtube-v3-alternative.p.rapidapi.com/comments?id=${videoId}`,
        {
          method: 'GET', // Replace with the appropriate HTTP method (GET, POST, etc.)
          headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': 'adc29b9376msh1b0091298035bd7p168ba0jsn53e514376d50', // Replace with the actual value for x-auth-id
          },
        }
    );
    const json = await data.json();
    // console.log("comments of video: ",json);
    setComments(json.data);
  };

  useEffect(() => {
    getComments();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="bg-neutral-950 h-auto">
      <div className="flex flex-col w-full pl-8 bg-neutral-950 ">
        <div className="flex">
          <div className="pt-5 pl-5 start-0 w-[70%]">
            <iframe
              width="99%"
              height="550"
              src={
                "https://www.youtube.com/embed/" +
                searchParams.get("id") +
                "?autoplay=1"
              }
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-[30%] pl-4 pt-5 pr-7">
            <LiveChat />
          </div>
        </div>
        <div className="flex flex-row m-5 h-auto justify-between bg-neutral-950 ">
          <div className="flex flex-col w-[70%] mt-[-3.5rem] bg-neutral-950 ">
            <VideoInfo />
            <div className="flex flex-row h-auto w-[100%] justify-between bg-neutral-950">
              <div className="w-full bg-neutral-950 h-auto">
                {comments.map((comment) => (
                    <Comments
                      imglink={ comment?.authorProfileImageUrl[2]?.url }
                      name={ comment?.authorDisplayName }
                      text={ comment?.textDisplay }
                      date={ comment?.publishedTimeText }
                      likes={ comment?.likesCount }
                      replies={ comment?.replyCount }
                    />
                  ))}
                  {/* comment thread is not impleted because the commnets replies are not in api */}
                {/* <CommentsThread videoID={searchParams.get("id")} /> */}
              </div>
            </div>
          </div>
          <div className="w-[40%]">
            <div className="ml-5">
              <h1 className="font-extrabold mt-3">Related Videos</h1>
              <WatchPageVideos />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
