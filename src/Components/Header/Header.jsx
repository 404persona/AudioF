import React from "react";
import Logo from "./Logo.png";
import Menu from "./Menu";
import HamBurger from "./HamBurger";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="max-sm:flex max-sm:justify-center">
      <div className="w-screen fixed bg-white/70 backdrop-blur-xl md:py-4 max-sm:py-3 z-10">
        <nav className="flex justify-between items-center max-sm:px-10 sm:flex sm:justify-between md:px-20 max-sm:items-center">
          <div className="text-[2.2rem]">
            {/* <HiBars3BottomLeft /> */}

            <HamBurger />

            {/* <Menu/> */}
          </div>
          <Link to='/' className="flex items-center">
            <img src={Logo} className="w-[50px] h-[50px] max-sm:w-[35px] max-sm:h-[35px]" />
            <h1 className="text-[2rem] font-bold ml-4 max-sm:ml-2 max-sm:text-[1.5rem]">Audio</h1>
          </Link>
          <div>[USER]</div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
