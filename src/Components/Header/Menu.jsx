import React from "react";
import { NavLink } from "react-router-dom";


const Menu = () => {
  return (
    <div>

      <div className=" justify-center items-center top-0 left-0 h-screen w-screen  p-4 flex flex-col">
       
        <NavLink to='/' style={({isActive}) =>({
            color: isActive ? '#0ACF83' : '#333',
          } )}  className="text-[3rem] font-medium mb-2">
          Home
        </NavLink>
        <NavLink to='/shop' style={({isActive}) =>({
            color: isActive ? '#0ACF83' : '#333',
          } )}  className="text-[3rem] font-medium mb-2">
          Shop
        </NavLink>
        <NavLink style={({isActive}) =>({
            color: isActive ? '#0ACF83' : '#333',
          } )}  to='/about' className="text-[3rem] font-medium mb-2">
          About
        </NavLink>
        <NavLink style={({isActive}) =>({
            color: isActive ? '#0ACF83' : '#333',
          } )}  to='/contact' className="text-[3rem] font-medium mb-2">
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
