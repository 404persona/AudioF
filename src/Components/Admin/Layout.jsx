import React from "react";
import Slidebar from "./Nav/SlideBar";
import { Outlet, Routes, Route, useLocation } from "react-router-dom";
const Layout = () => {
  // const isAdminPage = window.location.pathname.startsWith("/admin");
 
  return (
    <>
      <div className="bg-[#F6F6F6]">
        <div className="flex justify-between">
          <div className=" shadow-lg">
            <Slidebar />
          </div>
          <div className=" w-full h-full m-6">
            <Outlet />
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Layout;
