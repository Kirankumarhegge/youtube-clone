import React from "react";
import { Link } from "react-router-dom";

const ResultCard = ({ data }) => {
  if (!data) return null;
  // console.log(data)

  const { title, thumbnail, videoId, channelTitle, description } = data;
  return (
    <Link to={`/video?id=${videoId}`}>
      <div className="flex ml-[5%] w-[100%] scroll-smooth  mt-4 bg-neutral-950  my-2 p-2 rounded-lg  hover:scale-[1.02]">
        <img
          className="h-44 w-90  rounded-lg"
          src={thumbnail[0]?.url}
          alt={title}
        />
        <div className="w-3/3 mx-4 ">
          <p className="text-xl font-bold mb-2 ">{title}</p>
          <p className="text-md font-bold mb-2">{channelTitle}</p>
          <p className="text-sm ">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ResultCard;
