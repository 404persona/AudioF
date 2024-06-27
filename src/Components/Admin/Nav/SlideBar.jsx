import React from "react";
import Logo from "../../Header/Logo.png";
import { LuLayoutDashboard } from "react-icons/lu";
import { SiGooglemarketingplatform } from "react-icons/si";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineBugReport } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { IoDocumentTextOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <>
      <div className="">
      <div className="  bg-white flex flex-col gap-[15vh] w-[250px]  h-screen p-6">
        <Link to="/admin">
          <div className="flex   items-center gap-4">
            <img src={Logo} className="w-[45px] h-[45px]" />
            <h1 className="font-bold text-[2rem]">Audio</h1>
          </div>
        </Link>
        <div className="pl-2">
          <ul className="flex flex-col gap-6 ">
            {/* Dashboard  */}
            <li>
              <NavLink
                className="flex font-medium justify-start items-center gap-2 text-[1.2rem]"
                style={({ isActive }) => ({
                  color: isActive ? "#0ACF83" : "#333",
                })}
                to="dashboard"
              >
                <LuLayoutDashboard />
                Dashboard
              </NavLink>
            </li>
            {/* Marketing  */}
            <li className="flex font-medium justify-start items-center gap-2 text-[1.2rem]">
              <NavLink
                className="flex font-medium justify-start items-center gap-2 text-[1.2rem]"
                style={({ isActive }) => ({
                  color: isActive ? "#0ACF83" : "#333",
                })}
                to="marketing"
              >
                <SiGooglemarketingplatform />
                Marketing
              </NavLink>
            </li>
            {/* Orders  */}
            <li className="flex font-medium justify-start items-center gap-2 text-[1.2rem]">
              <NavLink
                className="flex font-medium justify-start items-center gap-2 text-[1.2rem]"
                style={({ isActive }) => ({
                  color: isActive ? "#0ACF83" : "#333",
                })}
                to="orders"
              >
                <BiPurchaseTagAlt />
                Orders
              </NavLink>
            </li>
            {/* Products  */}
            <li className="flex font-medium justify-start items-center gap-2 text-[1.2rem]">
              <NavLink
                className="flex font-medium justify-start items-center gap-2 text-[1.2rem]"
                style={({ isActive }) => ({
                  color: isActive ? "#0ACF83" : "#333",
                })}
                to="products"
              >
                <MdOutlineProductionQuantityLimits />
                Products
              </NavLink>
            </li>
            {/* Blogs  */}
            <li className="flex font-medium justify-start items-center gap-2 text-[1.2rem]">
              <NavLink
                className="flex font-medium justify-start items-center gap-2 text-[1.2rem]"
                style={({ isActive }) => ({
                  color: isActive ? "#0ACF83" : "#333",
                })}
                to="blogs"
              >
               <IoDocumentTextOutline />
                Blogs
              </NavLink>
            </li>
            {/* Reports  */}
            <li className="flex font-medium justify-start items-center gap-2 text-[1.2rem]">
              <NavLink
                className="flex font-medium justify-start items-center gap-2 text-[1.2rem]"
                style={({ isActive }) => ({
                  color: isActive ? "#0ACF83" : "#333",
                })}
                to="reports"
              >
                <MdOutlineBugReport />
                Reports
              </NavLink>
            </li>
           
          </ul>
        </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;
