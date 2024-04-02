import React from "react";
import Slidebar from "./Nav/SlideBar";
import { Outlet, Route, Routes } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <div className=" bg-[#F6F6F6] w-screen h-screen">
        <div className="flex justify-between">
          <Slidebar />
          <div className="p-8">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
