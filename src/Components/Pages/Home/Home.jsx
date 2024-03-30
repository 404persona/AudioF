import React, { useState } from "react";
import Header1 from "../../Header/Header1";
import { Outlet } from "react-router-dom";
import FearuredProducts from "./Products/FearuredProducts";
import Search from "./Search";
import Logo from "../../Header/Logo.png";
import { motion } from "framer-motion";

const Home = () => {
  
  const charVariants = {
    hidden: { opacity: 0, transform: "translateY(50px)" }, // Adjust transform as needed
    visible: { opacity: 1, transform: "translateY(0)" },
    // Adjust transform as needed
  };

  const staggerVariants = {
    animate: {
      transition: { staggerChildren: 0.1 }, // Adjust stagger delay as needed
    },
  };
  return (
    <>
      <div>
      <motion.div
          className="fixed top-0 left-0 w-full h-[100vh] bg-white/60 flex flex-col items-center justify-center backdrop-blur-lg z-10 "
          initial={{
            y: "-100%",
          }}
          animate={{
            y: "100%",
          }}
          transition={{
            duration: 3,
            ease: [0.2, 1, 0.2, 1],
          }}
        >
          <img src={Logo} className="w-[150px] h-[150px]" />
          <h1 className="text-[4rem] font-bold ml-4">Audio</h1>
        </motion.div>
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          animate="animate"
          className="flex flex-col justify-center w-full h-screen px-10"
        >
          <motion.h1
            variants={charVariants}
            transition={{
              duration: 1,
            }}
            initial="hidden"
            animate="visible"
            className="font-medium text-[2rem]"
          >
            Hi,[FirstName]
          </motion.h1>
          <motion.h1
            variants={charVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 1.5,
            }}
            // className="font-medium text-[2rem]"
            className="text-[5rem] font-semibold w-[1000px] leading-tight"
          >
            What are you looking for today?
          </motion.h1>
          <Search />
        </motion.div>
        {/* lower section  */}
        <div>
          <div className="w-full h-full bg-[#F6F6F6] rounded-[50px] p-10">
            <Header1 />
            <Outlet />
            <FearuredProducts />
          </div>
        </div>
      
      </div>
    </>
  );
};

export default Home;
