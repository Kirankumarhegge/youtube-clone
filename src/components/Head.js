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
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="sticky top-0 z-40 w-full h-[64px] flex flex-wrap lg:justify-around md:justify-center sm:justify-between justify-between items-center bg-neutral-950">
      <div className="lg:w-1/5 md:w-1/4 sm:w-1/3 w-1/2 h-full">
        <div className="flex flex-wrap h-full py-3 items-center">
          <div className="h-full pt-1.5 lg:w-1/5 md:w-1/4 sm:w-1/3 w-1/3 cursor-pointer ">
          <svg  width="28px" height="28px" onClick={() => toggleMenuHandler()}
            alt="side bar"
            src= {menu} 
            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#ffffff" stroke-width="0.8879999999999999" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </div>
          <a href="/">
            <img className="h-6 w-full p-0.5" alt="logo" src={Logo} />
          </a>
        </div>
      </div>
      <div className="lg:w-[50%] md:w-1/2 pr-0 h-full hidden lg:block md:block">
        <SearchBar />
      </div>
      <div className="lg:w-1/5 md:w-1/4 sm:w-1/3 w-1/2 h-full flex flex-wrap justify-end items-center" >
          <div className="w-1/4">
            <div className="h-[100%] flex justify-end ">
             <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.5 9V15M6.5 12H12.5M16 10L18.5768 8.45392C19.3699 7.97803 19.7665 7.74009 20.0928 7.77051C20.3773 7.79703 20.6369 7.944 20.806 8.17433C21 8.43848 21 8.90095 21 9.8259V14.1741C21 15.099 21 15.5615 20.806 15.8257C20.6369 16.056 20.3773 16.203 20.0928 16.2295C19.7665 16.2599 19.3699 16.022 18.5768 15.5461L16 14M6.2 18H12.8C13.9201 18 14.4802 18 14.908 17.782C15.2843 17.5903 15.5903 17.2843 15.782 16.908C16 16.4802 16 15.9201 16 14.8V9.2C16 8.0799 16 7.51984 15.782 7.09202C15.5903 6.71569 15.2843 6.40973 14.908 6.21799C14.4802 6 13.9201 6 12.8 6H6.2C5.0799 6 4.51984 6 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3 7.51984 3 8.07989 3 9.2V14.8C3 15.9201 3 16.4802 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.51984 18 5.07989 18 6.2 18Z" stroke="#ffffff" stroke-width="0.43200000000000005" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>
          </div>
          <div className="w-1/4 ">
            <div className="h-[100%] flex justify-center">
              {/* <BiBell className="h-[2.3rem] w-[2.5rem]"/> */}
              <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.4800000000000001"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.152"></g><g id="SVGRepo_iconCarrier"> <path d="M13.7143 17.25C13.7143 18.2165 12.9468 19 12 19C11.0532 19 10.2857 18.2165 10.2857 17.25M12 5V5C9.51472 5 7.5 7.01472 7.5 9.5V10.8079C7.5 11.5944 7.34024 12.3728 7.0304 13.0957L6.59739 14.1061C6.31459 14.7659 6.79862 15.5 7.51654 15.5H16.4835C17.2014 15.5 17.6854 14.7659 17.4026 14.1061L16.9696 13.0957C16.6598 12.3728 16.5 11.5944 16.5 10.8079V9.5C16.5 7.01472 14.4853 5 12 5V5ZM12 5V4" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>
          </div>
          <div className="w-1/4 flex justify-start">
            <div onClick={() => setIsOpen((prev) => !prev)} className=" cursor-pointer overflow-hidden relative">
              <img className="h-10 p-1 rounded-full" alt="user icon" src="https://yt3.googleusercontent.com/ytc/AGIKgqMLIlKqZvDpaOhchoq8PQD6uEifK-L3y_tRaoCXbA=s900-c-k-c0x00ffffff-no-rj" />
            </div>
              { isOpen && (
                <div className="absolute z-10 top-[50px] right-14 rounded w-[250px] border-2 border-gray-400 backdrop-blur-md dark:backdrop-blur-xl shadow-md p-2" id="profileContent" >
                    <a href="#" className="block rounded-r-lg py-2 px-4 hover:border-l-white hover:border-l-4 hover:bg-neutral-950 hover:text-white">Create Channel</a>
                    <a href="#" className="block rounded-r-lg py-2 px-4 hover:border-l-white hover:border-l-4 hover:bg-neutral-950 hover:text-white">YouTube Studio</a>
                    <a href="#" className="block rounded-r-lg py-2 px-4 hover:border-l-white hover:border-l-4 hover:bg-neutral-950 hover:text-white">Switch Account</a>
                    <a href="#" className="block rounded-r-lg py-2 px-4 hover:border-l-white hover:border-l-4 hover:bg-neutral-950 hover:text-white">Sign Out</a>
                    <a href="#" className="block rounded-r-lg py-2 px-4 hover:border-l-white hover:border-l-4 hover:bg-neutral-950 hover:text-white">Purchase and Membership</a>
                    <a href="#" className="block rounded-r-lg py-2 px-4 hover:border-l-white hover:border-l-4 hover:bg-neutral-950 hover:text-white">Your Data in YouTube</a>
                    <a href="#" className="block rounded-r-lg py-2 px-4 hover:border-l-white hover:border-l-4 hover:bg-neutral-950 hover:text-white">Appearence</a>
                    <a href="#" className="block rounded-r-lg py-2 px-4 hover:border-l-white hover:border-l-4 hover:bg-neutral-950 hover:text-white">Language</a>
                    <a href="#" className="block rounded-r-lg py-2 px-4 hover:border-l-white hover:border-l-4 hover:bg-neutral-950 hover:text-white">Restricted Mode:Off</a>
                    <a href="#" className="block rounded-r-lg py-2 px-4 hover:border-l-white hover:border-l-4 hover:bg-neutral-950 hover:text-white">Location:India</a>
                    <a href="#" className="block rounded-r-lg py-2 px-4 hover:border-l-white hover:border-l-4 hover:bg-neutral-950 hover:text-white">KeyBoard Shortcuts</a>
                    <a href="#" className="block rounded-r-lg py-2 px-4 hover:border-l-white hover:border-l-4 hover:bg-neutral-950 hover:text-white">Settings</a>
                    <a href="#" className="block rounded-r-lg py-2 px-4 hover:border-l-white hover:border-l-4 hover:bg-neutral-950 hover:text-white">Help</a>
                    <a href="#" className="block rounded-r-lg py-2 px-4 hover:border-l-white hover:border-l-4 hover:bg-neutral-950 hover:text-white">Feedback</a>
                </div>
              )}
          </div>
        </div>
    </div>
  );
}

export default Head;

//dark:bg-black
