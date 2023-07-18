import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Head from "./Head";

const Body = () => {
  return (
    <>
      <div className="bg-zinc-900 dark:text-white">
        <Head />
        <div className="grid grid-flow-col bg-neutral-950">
          <div className="sticky top-14 z-30 scroll-smooth">
            <Sidebar />
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Body;