import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <>
      <div className="sticky top-[4rem] z-30 p-8 pt-3 w-60  h-screen overflow-y-auto bg-neutral-950">
        <ul className="mb-2">
          <Link to={"/"}>
            <li className="py-3 font-bold cursor-pointer">
              <i className="fa fa-home mr-3" aria-hidden="true"></i> Homes
            </li>
          </Link>
          <Link to={`/search?query=shorts`}>
          <li className="py-3 cursor-pointer">
            <i className="fa fa-play mr-3" aria-hidden="true"></i>Shorts
          </li>
          </Link>
          <Link to={`/search?query=Subscriptions`}>
          <li className="py-3 cursor-pointer">
            <i className="fa fa-archive mr-3" aria-hidden="true"></i> Subscriptions
          </li>
          </Link>
        </ul>
        <hr />
        <h1 className="mt-3 mb-3 font-semibold">Explore</h1>
        <ul>
          <li className="py-2 cursor-pointer">
            <i className="fa fa-fire mr-3" aria-hidden="true"></i>Trending 
          </li>
          <Link to={`/search?query=Shopping`}>
            <li className="py-3 cursor-pointer">
              <i className="fa fa-shopping-bag mr-3" aria-hidden="true"></i>
              Shopping
            </li>
          </Link>
          <Link to={`/search?query=Music`}>
            <li className="py-3 cursor-pointer">
              <i className="fa fa-music mr-3" aria-hidden="true"></i>Music
            </li>
          </Link>
          <Link to={`/search?query=Movies`}>
            <li className="py-3 cursor-pointer">
              <i className="fa fa-film mr-3" aria-hidden="true"></i>Movies
            </li>
          </Link>
          <Link to={`/search?query=Live`}>
            <li className="py-3 cursor-pointer">
              <i className="fa fa-podcast mr-3" aria-hidden="true"></i>Live
            </li>
          </Link>
          <Link to={`/search?query=Gaming`}>
            <li className="py-3 cursor-pointer">
              <i className="fa fa-gamepad mr-3" aria-hidden="true"></i>Gaming
            </li>
          </Link>
          <Link to={`/search?query=Sports`}>
            <li className="py-3 pb-5 cursor-pointer">
              <i className="fa fa-trophy mr-3" aria-hidden="true"></i>Sports
            </li>
          </Link>
        </ul>
        <hr />
        <ul className="mb-3 mt-3">
          <li className="py-2 cursor-pointer">
            <i className="fa fa-youtube-play mr-3" aria-hidden="true"></i>
            Library
          </li>
          <li className="py-3 cursor-pointer">
            <i className="fa fa-history mr-3" aria-hidden="true"></i>History
          </li>
          <li className="py-3 cursor-pointer">
            <i className="fa fa-youtube mr-3" aria-hidden="true"></i>Your videos
          </li>
          <li className="py-3 cursor-pointer">
            <i className="fa fa-clock-o mr-3" aria-hidden="true"></i>Watch later
          </li>
          <li className="py-3 cursor-pointer">
            <i className="fa fa-thumbs-up mr-3" aria-hidden="true"></i>Liked videos
          </li>
        </ul>
       
      </div>
    </>
  );
};

export default Sidebar;
