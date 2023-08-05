import React from "react";
import { Link } from "react-router-dom";

const ResultCard = ({ data }) => {
  if (!data) return null;
  console.log(data)

  const { title, thumbnail, videoId, channelTitle, description, lengthText } = data;
  return (
    <Link to={`/video?id=${videoId}`}>
      <div className="flex ml-[5%] w-[100%] scroll-smooth  mt-4 bg-neutral-950  my-2 p-2 rounded-lg ">
      <div className="relative">
        <img className="h-48 w-93 object-cover rounded-lg" src={thumbnail[0]?.url} alt={title} />
        { 
          lengthText ? 
          <span className="absolute bottom-1 right-1 rounded-md py-[0.1rem] px-[0.3rem] bg-neutral-950 text-sm">{lengthText }</span> : 
          <span className="absolute bottom-1 right-1 rounded-md py-[0.1rem] px-[0.3rem] bg-red-600 text-sm">Live</span>
        }
        
      </div>
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
