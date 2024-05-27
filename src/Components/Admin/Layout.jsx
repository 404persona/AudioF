import React from "react";
import Slidebar from "./Nav/SlideBar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <div className="bg-[#F6F6F6]">
        <div className="flex">
          <div className="fixed shadow-lg">
            <Slidebar />
          </div>
          <div className=" w-full h-full  m-8 ml-[280px]">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
