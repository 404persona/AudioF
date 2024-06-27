import React from "react";
import Slidebar from "./Nav/SlideBar";
import { Outlet } from "react-router-dom";
const Layout = () => {

  return (
    <>
      <div className="bg-[#F6F6F6]">
        <div className="flex justify-between">
          <div className="fixed z-10 shadow-lg">
            <Slidebar />
          </div>
          <div className="md:pl-[260px] w-full h-full m-6 bg-[#F6F6F6]">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
