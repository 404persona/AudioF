import React from "react";
import Slidebar from "./Nav/SlideBar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <div className=" overflow-hidden bg-[#F6F6F6]">
        <div className="flex">
          <div>
            <Slidebar />
          </div>
          <div className="m-8">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
