import React from "react";
import { publishedAt as publishedAtFunc } from "../utils/publisedAt";
import { BiLike, BiDislike } from "react-icons/bi";

const Comment = ({ item, repliesQty, setVisibleSection, visibleSection }) => {
  const { authorProfileImageUrl, authorDisplayName, publishedAt, textDisplay } =
    item.snippet?.topLevelComment?.snippet;

  return (
    <div className="flex flex-col m-2 bg-neutral-950">
      <div className="flex flex-row items-start mb-3 font-roboto">
        <img
          className="rounded-full"
          src={authorProfileImageUrl}
          alt="commentAuthor"
        />
        <div className="flex flex-col ml-3 justify-start">
          <h2 className="font-bold">
            {authorDisplayName}
            <span className="ml-2 text-gray-600 text-sm">
              {publishedAtFunc(publishedAt)}
            </span>
          </h2>
          <h3 className="text-sm mt-1">{textDisplay}</h3>
        </div>
      </div>
      <div className="flex flex-row mr-3 items-center ml-12 mb-2">
        <span className="w-5 h-5 mr-2 hover:bg-gray-300 hover:rounded-full">
          <BiLike />
        </span>
        <span className="w-5 h-5 mr-2 hover:bg-gray-300 hover:rounded-full">
          <BiDislike />
        </span>
        <span className="">Reply</span>
      </div>
      {repliesQty && (
        <div
          className="flex flex-row mr-3 items-center ml-12 mb-2 cursor-pointer"
          onClick={
            item.id !== visibleSection
              ? () => setVisibleSection(item.id)
              : () => setVisibleSection(null)
          }
        >
          {item.id === visibleSection ? (
            <span className="w-3 h-3 mr-2 hover:bg-gray-300 hover:rounded-full">
              <BiLike />
            </span>
          ) : (
            <span className="w-3 h-3 mr-2 hover:bg-gray-300 hover:rounded-full">
              <BiDislike />
            </span>
          )}
          <span className="text-blue-900 font-semibold">
            {" "}
            {repliesQty} Reply
          </span>
        </div>
      )}
    </div>
  );
};

export default Comment;
