import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Head from "./Head";

const Body = () => {
  return (
    <>
      <div className="bg-neutral-950 dark:text-white">
        <Head />
        <div className="grid grid-flow-col bg-neutral-950">
          <div className="sticky top-14 z-10  transition-all ease-in duration-500 ">
            <Sidebar />
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Body;
