import React, { useContext, useEffect, useState } from "react";
import Header1 from "../../Header/Header1";
import { Outlet, useParams } from "react-router-dom";
import FearuredProducts from "./Products/FearuredProducts";
import Search from "./Search";
import { motion } from "framer-motion";
import UserContext from "../../../AuthContext";
import Loader from "../../../Loader";

const Home = () => {
  const [UserData, setUserData] = useState("");
  const [isLoaderComplete, setIsLoaderComplete] = useState(false);
  const { userId } = useParams();
  const { userData } = useContext(UserContext);

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

  const charVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: "0%" },
  };

  const staggerVariants = {
    animate: {
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <>
      {isLoaderComplete ? (
        <div>
          <div className="flex flex-col max-sm:justify-around md:justify-center max-sm:gap-2 max-sm:mt-[100px] w-full h-screen">
            <motion.div
              variants={staggerVariants}
              initial="hidden"
              animate="animate"
              className="flex flex-col max-sm:px-3 md:px-10 md:pt-[850px] md:pb-20"
            >
              <motion.h1
                variants={charVariants}
                transition={{ duration: 1 }}
                initial="hidden"
                animate="visible"
                className="font-normal md:text-[2rem] max-sm:text-[1.4rem]"
              >
                <h1>Hi, {UserData.firstName}!</h1>
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
                <div>{/* <FearuredProducts /> */}</div>
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
