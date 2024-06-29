import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import Hero1 from "../../../images/C2.webp";
import Hero2 from "../../../images/C1.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Pagination} from 'swiper/modules'
import "swiper/css";
import 'swiper/css/autoplay'

const Cables = () => {
  return (
    <div>
      <div className="pt-4">
        {/* card-1  hero-2 */}

        {/* card2 */}
    
      <Swiper
      modules={[Autoplay,Pagination]}
        spaceBetween={50}
        speed={1050}
        loop={true} // Enable infinite loop
        autoplay={true}
        pagination={{ clickable: true }}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {/* Card 1  */}
        <SwiperSlide>
          <div className="flex justify-center">
            <div className="bg-white rounded-xl flex w-[1000px] shadow-lg p-10 ">
              <div className="flex flex-col justify-center">
                <h1 className="font-semibold text-[3rem] leading-tight">
                  TMA-2 Modular Cables
                </h1>
                <button className=" flex justify-start gap-3 text-[#0ACF83] items-center ml-2 mt-2 font-semibold text-[1.2rem]">
                  Shop now <FaArrowRightLong />
                </button>
              </div>
              <div>
                <img src={Hero1} className="w-[500px] drop-shadow-md" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Card 2  */}
        <SwiperSlide>
          <div className="flex justify-center">
            <div className="bg-white rounded-xl flex w-[1000px] shadow-lg p-10 ">
              <div className="flex flex-col justify-center">
                <h1 className="font-semibold text-[3rem] leading-tight">
                  TMA-2 Modular Cables
                </h1>
                <button className=" flex justify-start gap-3 text-[#0ACF83] items-center ml-2 mt-2 font-semibold text-[1.2rem]">
                  Shop now <FaArrowRightLong />
                </button>
              </div>
              <div>
                <img src={Hero2} className="w-[500px] drop-shadow-md" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

export default Cables