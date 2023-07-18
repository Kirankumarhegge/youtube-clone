import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { BiLike, BiDislike } from "react-icons/bi";

const Comments = ({ name, text, imglink, likes, date, replies }) => {
  // console.log(imglink)
  return (
    <div className="m-3 p-2 shadow rounded-lg bg-neutral-950">
      <div className="flex ">
        <div className="w-[40px] h-[40px]">
          <img className="min-w-[40px] min-h-[40px] rounded-full" alt="img" src={imglink} />
        </div>
        <div className="px-3 text-sm text-slate-200">
          <span className="font-normal ">{name}</span>
          <span className="font-normal  text-zinc-400"> {date}</span>
          <h3 className="">{text}</h3>
        </div>
      </div>
      <div className="flex pt-2 ">
        <div className="w-[50px] h-[30px]"></div>
        <span className="h-5 w-5">
          <BiLike />
        </span>
        <span className="text-sm text-zinc-400 mx-1">{likes}</span>
        <span className="h-5 w-5 pt2 ml-3">
          <BiDislike />
        </span>
        <span className="text-sm text-slate-200 ml-3">Reply</span>
      </div>
      {replies > 0 && (
      <div className="flex">
        <div className="w-[50px] h-[30px]"></div>
        <span className="h-5 w-5 text-blue-500">
          <AiFillCaretDown />
        </span>
        <span className="text-sm text-blue-500 mx-1">{replies}</span>
        <span className="text-sm text-blue-500 mx-1">Replies</span>
      </div>
      )}
        
      
    </div>
  );
};

export default Comments;
