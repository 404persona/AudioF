import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  const [isOpen, setisOpen] = useState(false);
  
  const toggleMenu = () => {
    setisOpen(!isOpen);
  };
  useEffect(()=>{
    if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
      return () => {
        // Cleanup function to reset overflow on unmount (optional)
        document.body.style.overflow = "auto";
      };
  },[isOpen])

  const menuVariants = {
    open: {
      y: 1,
      transition: { duration: 0.3, ease: "easeIn" },
    //   x:1
    },
    closed: {
      y: "100%",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };
  

  return (
    <div>
      <div className=" relative w-[50px] h-[50px] hamburger">
        {/* Class for click detection */}
        <button onClick={toggleMenu} className="focus:outline-none">
          <div> 
         <div className="flex items-center relative left-[-20px] top-6">
            <IoSearch className="text-gray-400 text-[1.7rem] relative left-[40px] " />
            <input
              type="Search"
              className="outline-none border-gray-300 rounded-md p-1 border-[2px] w-[500px] h-[50px] pl-10 focus:border-green-10 transition-all"
              placeholder="Search Headphone"
            />
          </div>
         </div>
        </button>
        <motion.div
          className="fixed top-0 left-0 z-50 h-screen w-screen  backdrop-blur-lg bg-white/70 overflow-hidden"
          variants={menuVariants}
          animate={isOpen ? "open" : "closed"}
          initial="closed"
          
        //   onClick={toggleMenu} // Close on menu click
        >
          <div className="pb-[400px] w-screen h-screen flex justify-center" > 
         <div className="flex items-center relative left-[-20px] top-6">
            <IoSearch className="text-gray-400 text-[1.7rem] relative left-[40px] " />
            <input
              type="Search"
              className="outline-none border-gray-300 rounded-md p-1 border-[2px] w-[700px] h-[50px] pl-10 focus:border-green-500 transition-all"
              placeholder="Search Headphone"
            />
          </div>
         </div>
          {isOpen && (
            <button
              onClick={toggleMenu}
              className="z-50 absolute top-4 left-20 text-[2rem] focus:outline-none hover:text-gray-900" // Reversed position
            >
              <AiOutlineClose />
            </button>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Search;
