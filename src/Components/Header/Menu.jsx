import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
// import { motion, useInView } from "framer-motion";

const Menu = () => {
  return (
    <div>
      <div className=" justify-center items-center gap-2 top-0  left-0 h-screen w-screen  p-4 flex flex-col">
        <div>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#0ACF83" : "#333",
            })}
            className="text-[3rem] font-medium mb-2"
          >
            <motion.h4
       initial={{
        paddingTop : '100vh'
       }}
       animate={{
        paddingTop : '0vh'
       }}
       transition={{
        duration: 1
       }}
            >Home</motion.h4>
          </NavLink>
        </div>
        <NavLink
          to="/shop"
          style={({ isActive }) => ({
            color: isActive ? "#0ACF83" : "#333",
          })}
          className="text-[3rem] font-medium mb-2"
        >
          Shop
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#0ACF83" : "#333",
          })}
          to="/about"
          className="text-[3rem] font-medium mb-2"
        >
          About
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#0ACF83" : "#333",
          })}
          to="/contact"
          className="text-[3rem] font-medium mb-2"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;