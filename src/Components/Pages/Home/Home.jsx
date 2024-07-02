import React, { useContext, useEffect, useState } from "react";
import Header1 from "../../Header/Header1";
import { Outlet, useParams } from "react-router-dom";
import FearuredProducts from "./Products/FearuredProducts";
import Search from "./Search";
import { easeIn, easeInOut, motion, transform } from "framer-motion";
import UserContext from "../../../Context/AuthContext";
import Loader from "../../../Loader";

const Home = () => {
  const [UserData, setUserData] = useState("");
  const [isLoaderComplete, setIsLoaderComplete] = useState(false);
  const { userId } = useParams();
  const { userData } = useContext(UserContext);
  const HeroText = [
    {
      word: "What"
    },
    {
      word: "are"
    },
    {
      word: "you"
    },
    {
      word: "looking"
    },
    {
      word: "for"
    },
    {
      word: "today"
    },
    {
      word: "?"
    },
  ];

  useEffect(() => {
    const storedAccessToken = localStorage.getItem("accessToken");
    if (storedAccessToken) {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(
            `https://localhost:4000/api/user/getuser/${userId}`,
            {
              headers: { Authorization: `Bearer ${storedAccessToken}` },
            }
          );
          setUserData(response.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
      fetchUserData();
    }
  }, [userId]);

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, transform: 'translateY(100px)' },
    visible: (i) => ({
      opacity: 1,
      transform: 'translateY(0px)',
      transition: {
        delay: i * 0.19, // Check if delay values are logged here (optional)
        duration: .9,
        ease: [0.090, 0.515, 0.345, 0.980],
      },
    }),
  };

  return (
    <>
      {isLoaderComplete ? (
        <div>
          <div className="flex flex-col max-sm:justify-around md:justify-center max-sm:gap-2 max-sm:mt-[100px] ">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="animate"
              className="flex flex-col max-sm:px-3 md:px-10 md:pt-[220px] md:pb-20"
            >

              <motion.h1
                initial="hidden"
                animate="visible"
                className="font-normal md:text-[2rem] max-sm:text-[1.4rem] overflow-hidden"
              >
                <motion.h1 variants={textVariants} >Hi, Anas </motion.h1>
              </motion.h1>
              <div className="flex md:gap-4 flex-wrap w-[1100px] leading-tight">
                {HeroText.map((word, index) => (
                  <motion.div
                   
                    className="text-[5rem] text-black font-medium overflow-hidden"
                  >
                    <motion.div
                     key={index}
                     custom={index}
                     initial="hidden"
                     animate="visible"
                      variants={textVariants}
                      className="overflow-hidden transition-all"
                    >
                      {word.word}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
              <div className="relative max-sm:right-[3px] md:right-[10px]">
                <Search />
              </div>
            </motion.div>
            {/* lower section  */}
            <div>
              <div className="w-full h-full bg-[#F6F6F6] rounded-t-[50px] p-10">
                <div className="flex justify-center">
                  <Header1 />
                </div>
                <div>
                  <Outlet />
                </div>
                <div><FearuredProducts /></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader onCountdownEnd={() => setIsLoaderComplete(true)} />
      )}
    </>
  );
};
export default Home;
