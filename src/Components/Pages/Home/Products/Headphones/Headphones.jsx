import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Hero1 from "../../../images/H1.webp";
import Hero2 from "../../../images/H2.webp";
import Transition from "../../Transition";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/autoplay";

const Headphones = () => {
  return (
    <>
      <motion.div className="pt-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={50}
          speed={1050}
          loop={true}
          autoplay={true}
          pagination={{ clickable: true }}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {/* Card 1  */}
          <SwiperSlide>
            <div className="flex justify-center ">
              <div className="bg-white rounded-3xl border-[1.5px] border-green-400 max-sm:w-[400px] flex justify-center w-[400px] md:w-[1000px] shadow-xl max-sm:p-4  md:p-10 ">
                <div className="flex flex-col justify-center ">
                  <h1 className="font-semibold text-[3rem] leading-tight max-sm:text-[1.4rem]">
                    TMA-2 Modular Headphone
                  </h1>
                  <button className=" flex justify-start md:gap-3 max-sm:gap-2 text-[#0ACF83] items-center ml-2 mt-2 font-semibold text-[1.2rem] max-sm:text-[0.9rem] max-sm:w-[130px]">
                    Shop now <FaArrowRightLong />
                  </button>
                </div>
                <div>
                  <motion.img
                    src={Hero1}
                    className="w-[500px] drop-shadow-md max-sm:200px "
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center ">
              <div className="bg-white rounded-3xl border-[1.5px] border-green-400 max-sm:w-[400px] flex justify-center w-[400px] md:w-[1000px] shadow-xl max-sm:p-4  md:p-10 ">
                <div className="flex flex-col justify-center ">
                  <h1 className="font-semibold text-[3rem] leading-tight max-sm:text-[1.4rem]">
                    TMA-2 Modular Headphone
                  </h1>
                  <button className=" flex justify-start md:gap-3 max-sm:gap-2 text-[#0ACF83] items-center ml-2 mt-2 font-semibold text-[1.2rem] max-sm:text-[0.9rem] max-sm:w-[130px]">
                    Shop now <FaArrowRightLong />
                  </button>
                </div>
                <div>
                  <motion.img
                    src={Hero2}
                    className="w-[500px] drop-shadow-md max-sm:200px "
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Card 2  */}
          {/* <SwiperSlide>
          <div className="flex justify-center">
            <div className="bg-white rounded-xl flex w-[1000px] shadow-lg p-10 ">
              <div className="flex flex-col justify-center">
                <h1 className="font-semibold text-[3rem] leading-tight  max-sm:text-[1.4rem]">
                  TMA-2 Modular Headphone
                </h1>
                <button className=" flex justify-start md:gap-3 max-sm:gap-2 text-[#0ACF83] items-center ml-2 mt-2 font-semibold text-[1.2rem] ax-sm:text-[1rem] max-sm:w-[130px]">
                  Shop now <FaArrowRightLong />
                </button>
              </div>
              <div>
                <img src={Hero2} className="w-[500px] drop-shadow-md sm:w-[200px]" />
              </div>
            </div>
          </div>
        </SwiperSlide> */}
        </Swiper>
      </motion.div>
    </>
  );
};

export default Headphones;
