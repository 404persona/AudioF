import React from "react";
import Header1 from "../../Header/Header1";
import { Outlet } from "react-router-dom";
import FearuredProducts from "./Products/FearuredProducts";
import Search from "./Search";
import Logo from "../../Header/Logo.png";
import { motion } from "framer-motion";
// import { useSelector } from "react-redux";
const Home = () => {
  const charVariants = {
    hidden: { opacity: 0, transform: "translateY(70px)" },
    visible: { opacity: 1, transform: "translateY(0px)" },
  };
  const staggerVariants = {
    animate: {
      transition: { staggerChildren: 0.1 },
    },
  };
  return (
    <>
      <div>
        <motion.div
          className="sm:w-screen fixed top-0 left-0 w-full h-[100vh] bg-white/50 flex flex-col items-center justify-center backdrop-blur-lg z-10 "
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
        <div className="flex flex-col  max-sm:justify-around md:justify-center max-sm:gap-2 max-sm:mt-[100px] w-full h-screen">
          <motion.div
            variants={staggerVariants}
            initial="hidden"
            animate="animate"
            className="flex flex-col max-sm:px-3 md:px-10 md:pt-[850px] md:pb-20 "
          >
            <motion.h1
              variants={charVariants}
              transition={{
                duration: 1,
              }}
              initial="hidden"
              animate="visible"
              className="font-normal md:text-[2rem] max-sm:text-[1.4rem]"
            >
              Hi, [Username]
            </motion.h1>
            <motion.h1
              variants={charVariants}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 1.5,
              }}
              className="text-[5rem] md:font-semibold max-sm:font-bold w-[1000px] leading-tight max-sm:text-[1.85rem] max-sm:w-[360px]"
            >
              What are you looking for today?
            </motion.h1>
            <div className="relative max-sm:right-[3px]">
              <Search />
            </div>
          </motion.div>
          {/* lower section  */}
          <div>
            <div className="w-full h-full bg-[#F6F6F6] rounded-[50px] p-10">
              <div className="flex justify-center">
                <Header1 />
              </div>
              <div>
                <Outlet />
              </div>
              <div>
                <FearuredProducts />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
