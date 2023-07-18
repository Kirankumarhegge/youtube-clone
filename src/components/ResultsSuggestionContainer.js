import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const ResultsSuggestionContainer = ({ suggestion }) => {
  if (!suggestion) return null;
  return (
    <div className="bg-neutral-900 rounded-lg z-40">
      <Link to={`/search?query=${suggestion}`}>
        <p
          className="p-[0.4rem] px-2 font-normal  hover:bg-neutral-800 cursor-pointer rounded-lg"
        >
          <BsSearch className="inline mx-2 font-normal text-sm text-slate-200" />
          {suggestion}
        </p>
        </Link>
    </div>
  );
};

export default ResultsSuggestionContainer;
