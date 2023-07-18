import React, { useState, useEffect } from "react";
import Logo from "../img/Youtube-Logo-PNG.png";
import menu from "../img/menu.png"
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "./../utils/constants";
import SearchBar from "./SearchBar";
import { BiVideoPlus, BiBell, BiMenu } from "react-icons/bi"

function Head() {
  // eslint-disable-next-line
  const [searchQuery, setSearchQuery] = useState("");
  // eslint-disable-next-line
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // console.log(searchQuery);

    const timer = setTimeout(() => getSearchSuggestions(), 600);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json);
    setSuggestions(json[1]);
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  //https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=faded

  return (
    <div className="sticky top-0 z-40 grid lg:grid-cols-8 md:grid-cols-5 justify-between bg-neutral-950">
      <div className="flex lg:col-span-2 md:col-span-2 p-1 m-1 ml-3">
        <BiMenu
          onClick={() => toggleMenuHandler()}
          className="h-8 w-20 px-4 mt-[3%]  cursor-pointer "
          alt="side bar"
          src= {menu}
        />
        <a href="/">
          <img className="h-5 w-[100%] mt-4 px-2 w-40 " alt="logo" src={Logo} />
        </a>
      </div>
      <SearchBar />
      <div className=" lg:col-start-8 lg:col-end-8 md:col-start-8" >
        <div className="grid grid-cols-3">
          <div className="h-[100%] w-[100%] p-3">
            <BiVideoPlus className="h-[2.5rem] w-[2.5rem]"/>
          </div>
          <div className="h-[100%] w-[100%] p-3">
            <BiBell className="h-[2.3rem] w-[2.5rem]"/>
          </div>
          <div className="">
            <img
              className="h-[100%] w-[100%] p-3 rounded-full"
              alt="user icon"
              src="https://yt3.googleusercontent.com/ytc/AGIKgqMLIlKqZvDpaOhchoq8PQD6uEifK-L3y_tRaoCXbA=s900-c-k-c0x00ffffff-no-rj"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Head;

//dark:bg-black
