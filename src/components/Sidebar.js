import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <>
      <div className="sticky top-[4.5rem] z-20 px-8 w-60 h-[90vh] overflow-y-scroll bg-neutral-950">
        <ul className="mb-2">
          <Link to={"/"}>
            <li className="py-3 font-bold cursor-pointer flex flex-wrap">
              <svg width="22px" height="22px" className="mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.9"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.3911 4.26185C11.986 3.84943 11.3167 3.86534 10.9317 4.29654L4.75406 11.2155C4.59044 11.3987 4.5 11.6358 4.5 11.8815V19.5C4.5 20.0523 4.94772 20.5 5.5 20.5H8.5C9.05228 20.5 9.5 20.0523 9.5 19.5V16C9.5 15.4477 9.94772 15 10.5 15H13.5C14.0523 15 14.5 15.4477 14.5 16V19.5C14.5 20.0523 14.9477 20.5 15.5 20.5H18.5C19.0523 20.5 19.5 20.0523 19.5 19.5V11.909C19.5 11.6469 19.3971 11.3953 19.2134 11.2083L12.3911 4.26185Z" stroke="#f5f5f5"></path> </g></svg>           
              Homes
            </li>
          </Link>
          <Link to={`/search?query=shorts`}>
          <li className="py-3 cursor-pointer flex flex-wrap">
          <svg width="22px" height="22px" className="mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#f2f2f2" stroke-width="0.9"></path> <path d="M17 2.5L17 21.5" stroke="#f2f2f2" stroke-width="0.528" stroke-linecap="round"></path> <path d="M7 2.5L7 21.5" stroke="#f2f2f2" stroke-width="0.528" stroke-linecap="round"></path> <path d="M2 12L7 12M22 12L17 12" stroke="#f2f2f2" stroke-width="0.528" stroke-linecap="round"></path> <path d="M2.5 7L7 7M21.5 7L17 7" stroke="#f2f2f2" stroke-width="0.528" stroke-linecap="round"></path> <path d="M2.5 17L7 17M21.5 17L17 17" stroke="#f2f2f2" stroke-width="0.528" stroke-linecap="round"></path> <path d="M14 12C14 11.4722 13.4704 11.1162 12.4112 10.4043C11.3375 9.68271 10.8006 9.3219 10.4003 9.58682C10 9.85174 10 10.5678 10 12C10 13.4322 10 14.1483 10.4003 14.4132C10.8006 14.6781 11.3375 14.3173 12.4112 13.5957C13.4704 12.8838 14 12.5278 14 12Z" stroke="#f2f2f2" stroke-width="0.528" stroke-linecap="round"></path> </g></svg>
            Shorts
          </li>
          </Link>
          <Link to={`/search?query=Subscriptions`}>
          <li className="py-3 cursor-pointer flex flex-wrap">
          <svg width="22px" height="22px" className="mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19.5617 7C19.7904 5.69523 18.7863 4.5 17.4617 4.5H6.53788C5.21323 4.5 4.20922 5.69523 4.43784 7" stroke="#f2f2f2" stroke-width="0.8160000000000001"></path> <path d="M17.4999 4.5C17.5283 4.24092 17.5425 4.11135 17.5427 4.00435C17.545 2.98072 16.7739 2.12064 15.7561 2.01142C15.6497 2 15.5194 2 15.2588 2H8.74099C8.48035 2 8.35002 2 8.24362 2.01142C7.22584 2.12064 6.45481 2.98072 6.45704 4.00434C6.45727 4.11135 6.47146 4.2409 6.49983 4.5" stroke="#f2f2f2" stroke-width="0.91"></path> <path d="M14.5812 13.6159C15.1396 13.9621 15.1396 14.8582 14.5812 15.2044L11.2096 17.2945C10.6669 17.6309 10 17.1931 10 16.5003L10 12.32C10 11.6273 10.6669 11.1894 11.2096 11.5258L14.5812 13.6159Z" stroke="#f2f2f2" stroke-width="0.8160000000000001"></path> <path d="M2.38351 13.793C1.93748 10.6294 1.71447 9.04765 2.66232 8.02383C3.61017 7 5.29758 7 8.67239 7H15.3276C18.7024 7 20.3898 7 21.3377 8.02383C22.2855 9.04765 22.0625 10.6294 21.6165 13.793L21.1935 16.793C20.8437 19.2739 20.6689 20.5143 19.7717 21.2572C18.8745 22 17.5512 22 14.9046 22H9.09536C6.44881 22 5.12553 22 4.22834 21.2572C3.33115 20.5143 3.15626 19.2739 2.80648 16.793L2.38351 13.793Z" stroke="#f2f2f2" stroke-width="0.8160000000000001"></path> </g></svg>
            Subscriptions
          </li>
          </Link>
        </ul>
        <hr />
        <h1 className="mt-3 mb-3 font-semibold">Explore</h1>
        <ul>
          <li className="py-2 cursor-pointer flex flex-wrap">
          <svg width="22px" height="22px" className="mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.3671 4.06132C9.6671 4.56707 5 8.15805 5 13.9996C5 14.9188 5.18106 15.8291 5.53284 16.6784C5.88463 17.5277 6.40024 18.2993 7.05025 18.9493C7.70026 19.5993 8.47194 20.115 9.32122 20.4667C10.146 20.8084 11.0282 20.989 11.9203 20.9991C9.74796 20.9567 8 19.1824 8 16.9999C8 16.8024 8.01432 16.6082 8.04197 16.4184C8.04315 16.4071 8.04459 16.3957 8.04628 16.3843C8.3817 14.1305 10.4553 12.2171 11.4581 11.4101C11.7785 11.1523 12.2216 11.1523 12.5421 11.4101C13.5448 12.2171 15.6183 14.1305 15.9537 16.3843C15.9554 16.3957 15.9569 16.4071 15.958 16.4184C15.9857 16.6082 16 16.8024 16 16.9999C16 19.1824 14.252 20.9567 12.0797 20.9991C12.9718 20.989 13.854 20.8084 14.6788 20.4667C15.5281 20.115 16.2997 19.5993 16.9497 18.9493C17.5998 18.2993 18.1154 17.5277 18.4672 16.6784C18.807 15.8579 18.9875 14.9804 18.9994 14.093C18.9998 14.0815 19 14.07 19 14.0584L18.9999 14.0268L19 13.9997C18.9736 9.75902 16.1044 7.4446 15.5813 7.05781C15.5323 7.02155 15.4671 7.02196 15.4181 7.05823C15.2083 7.21337 14.6241 7.67639 13.9967 8.44729C13.9251 8.53521 13.7845 8.5184 13.7361 8.41591C12.5573 5.92135 10.9243 4.40726 10.5386 4.07102C10.4888 4.02764 10.4206 4.02266 10.3671 4.06132Z" fill="#f5f5f5"></path> </g></svg>
            Trending 
          </li>
          <Link to={`/search?query=Shopping`}>
            <li className="py-3 cursor-pointer">
              <i className="fa fa-shopping-bag mr-3" aria-hidden="true"></i>
              Shopping
            </li>
          </Link>
          <Link to={`/search?query=Music`}>
            <li className="py-3 cursor-pointer">
              <i className="fa fa-music mr-4" aria-hidden="true"></i>Music
            </li>
          </Link>
          <Link to={`/search?query=Movies`}>
            <li className="py-3 cursor-pointer">
              <i className="fa fa-film mr-3" aria-hidden="true"></i>Movies
            </li>
          </Link>
          <Link to={`/search?query=Live`}>
            <li className="py-3 cursor-pointer">
              <i className="fa fa-podcast mr-4" aria-hidden="true"></i>Live
            </li>
          </Link>
          <Link to={`/search?query=Gaming`}>
            <li className="py-3 cursor-pointer">
              <i className="fa fa-gamepad mr-3" aria-hidden="true"></i>Gaming
            </li>
          </Link>
          <Link to={`/search?query=Sports`}>
            <li className="py-3 pb-5 cursor-pointer">
              <i className="fa fa-trophy mr-4" aria-hidden="true"></i>Sports
            </li>
          </Link>
        </ul>
        <hr />
        <ul className="mb-3 mt-3">
          <li className="py-2 cursor-pointer">
            <i className="fa fa-youtube-play mr-4" aria-hidden="true"></i>
            Library
          </li>
          <li className="py-3 cursor-pointer">
            <i className="fa fa-history mr-4" aria-hidden="true"></i>History
          </li>
          <li className="py-3 cursor-pointer">
            <i className="fa fa-youtube mr-4" aria-hidden="true"></i>Your videos
          </li>
          <li className="py-3 cursor-pointer">
            <i className="fa fa-clock-o mr-4" aria-hidden="true"></i>Watch later
          </li>
          <li className="py-3 cursor-pointer">
            <i className="fa fa-thumbs-up mr-4" aria-hidden="true"></i>Liked videos
          </li>
        </ul>
        </div>
    </>
  );
};

export default Sidebar;
