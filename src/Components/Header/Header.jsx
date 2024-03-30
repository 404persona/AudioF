import React from "react";
import Logo from "./Logo.png";
import Menu from "./Menu";
import HamBurger from "./HamBurger";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="w-full fixed bg-white/70 backdrop-blur-xl py-4 z-10">
        <nav className="flex justify-between items-center px-20">
          <div className="text-[2.2rem]">
            {/* <HiBars3BottomLeft /> */}

            <HamBurger />

            {/* <Menu/> */}
          </div>
          <Link to='/' className="flex items-center">
            <img src={Logo} className="w-[50px] h-[50px]" />
            <h1 className="text-[2rem] font-bold ml-4">Audio</h1>
          </Link>
          <div>[USER]</div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
