import React from "react";
import Logo from "../../Header/Logo.png";
import { LuLayoutDashboard } from "react-icons/lu";
import { SiGooglemarketingplatform } from "react-icons/si";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineBugReport } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="  bg-white flex flex-col gap-[15vh] w-[250px]  h-screen p-6 shadow-lg">
        <div className="flex  items-center gap-4">
          <img src={Logo} className="w-[45px] h-[45px]" />
          <h1 className="font-bold text-[2rem]">Audio</h1>
        </div>
        <div className="pl-2">
          <ul className="flex flex-col gap-6 ">
            {/* Dashboard  */}
            <li>
              <NavLink
                className="flex font-medium justify-start items-center gap-2 text-[1.2rem]"
                style={({ isActive }) => ({
                  color: isActive ? "#0ACF83" : "#333",
                })}
                to="admin/dashboard"
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
                to="admin/marketing"
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
                to="admin/orders"
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
                to="admin/products"
              >
                <MdOutlineProductionQuantityLimits />
                Products
              </NavLink>
            </li>
            {/* Reports  */}
            <li className="flex font-medium justify-start items-center gap-2 text-[1.2rem]">
              <NavLink
                className="flex font-medium justify-start items-center gap-2 text-[1.2rem]"
                style={({ isActive }) => ({
                  color: isActive ? "#0ACF83" : "#333",
                })}
                to="admin/reports"
              >
                <MdOutlineBugReport />
                Reports
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
