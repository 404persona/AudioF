import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import Menu from "./Menu";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";

const HamBurger = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggleMenu = () => {
    setisOpen(!isOpen);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const menuVariants = {
    open: {
      x: 0,
      transition: { duration:0.3, ease:[.11,.32,.7,.99]},
    },
    closed: {
      x: "-100%",
      transition: { duration: 0.3, ease: [.11,.32,.7,.99] },
    },
  };
  return (
    <div className="overflow-hidden">
      <div className=" relative w-[50px] h-[50px] hamburger">
        {/* Class for click detection */}
        <button onClick={toggleMenu} className="focus:outline-none">
          <HiMiniBars3BottomLeft />
        </button>
        <motion.div
          className="fixed top-0 left-0 z-50 h-screen w-screen bg-white overflow-hidden"
          variants={menuVariants}
          animate={isOpen ? "open" : "closed"}
          onClick={toggleMenu} // Close on menu click
          initial="closed"
        >
          <Menu />
          {isOpen && (
            <button
              onClick={toggleMenu}
              className="z-50 absolute max-sm:left-6 top-4 md:left-20 focus:outline-none hover:text-gray-900"
            >
              <AiOutlineClose />
            </button>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default HamBurger;
