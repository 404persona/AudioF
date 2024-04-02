import React from "react";
import Logo from "../../Header/Logo.png";
import { LuLayoutDashboard } from "react-icons/lu";
import { SiGooglemarketingplatform } from "react-icons/si";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineBugReport } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <div className=" bg-white flex flex-col  gap-[15vh] w-[300px] h-screen p-8 shadow-lg">
        <div className="flex  items-center gap-4">
          <img src={Logo} className="w-[55px] h-[55px]" />
          <h1 className="font-semibold text-[2.3rem]">Audio</h1>
        </div>
        <div className="pl-3">
          <ul className="flex flex-col gap-6 ">
            {/* Dashboard  */}
            <li className="flex font-medium justify-start items-center gap-2 text-[1.2rem]">
              <LuLayoutDashboard />
              <a href="">Dashboard</a>
            </li>
            {/* Marketing  */}
            <li className="flex font-medium justify-start items-center gap-2 text-[1.2rem]">
              <SiGooglemarketingplatform />
              <a href="">Marketing</a>
            </li>
            {/* Orders  */}
            <li className="flex font-medium justify-start items-center gap-2 text-[1.2rem]">
              <BiPurchaseTagAlt />
              <a href="">Orders</a>
            </li>
            {/* Products  */}
            <li className="flex font-medium justify-start items-center gap-2 text-[1.2rem]">
              <MdOutlineProductionQuantityLimits />
              <a href="">Products</a>
            </li>
            {/* Reports  */}
            <li className="flex font-medium justify-start items-center gap-2 text-[1.2rem]">
              <MdOutlineBugReport />
              <a href="">Reports</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
