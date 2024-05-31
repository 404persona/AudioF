import React from "react";
import Slidebar from "./Nav/SlideBar";
import { Outlet, Routes, Route, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Dashboard from "./Pages/Dashboard";
import Marketing from "./Pages/Marketing";
import Orders from "./Pages/Orders";
import Products from "./Pages/Product/Products";
import AddProducts from "./Pages/Product/AddProducts";
import Reports from "./Pages/Reports";
const Layout = () => {
  // const isAdminPage = window.location.pathname.startsWith("/admin");
 
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
