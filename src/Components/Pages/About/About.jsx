import React from "react";
import { motion } from "framer-motion";
import Logo from "../../Header/Logo.png";
// import { useSelector } from 'react-redux';

const About = () => {
  const image1 = 'https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  const image2 = 'https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  return (
    <div>
      <div className="p-8">
        <div>
          <motion.div
            initial={{
              opacity: 0,
              y: "20px",
            }}
            animate={{
              opacity: 1,
              y: "0px",
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="pt-[80px]"
          >
            <h1 class="bg-gradient-to-r max-sm:text-[2.5rem] from-green-400 to-black text-center text-transparent bg-clip-text text-[3rem] font-semibold">
              Meet the Makers
            </h1>
          </motion.div>
          <div>
            <div className="flex justify-center flex-col">
              <div className=" w-[450px] h-[300px] max-sm:w-[350px] rounded-2xl max-sm:h-[200px] flex flex-col justify-end mb-4" style={{
                backgroundImage : `url(https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
                backgroundOrigin: "border-box",
                backgroundPosition: "Center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "Cover",
              }}>
             <div className="bg-black/40 rounded-2xl w-full h-[200px] flex items-end">
             <h1 className="  text-white max-sm:text-[1.5rem]  text-[2rem] p-4 font-semibold">Our Industries</h1>
             </div>
              </div>
              <div className=" w-[450px] h-[300px] max-sm:w-[350px] rounded-2xl max-sm:h-[200px] flex flex-col justify-end" style={{
                backgroundImage : `url(https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
                backgroundOrigin: "border-box",
                backgroundPosition: "Center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "Cover",
              }}>
             <div className="bg-black/40 rounded-2xl w-full h-[200px] flex items-end">
             <h1 className="  text-white max-sm:text-[1.5rem]  text-[2rem] p-4 font-semibold">Our Production House</h1>
             </div>
              </div>
              
            </div>
            <p className="flex font-medium text-justify">Audio isn't just a brand, it's a collective passion for sound. We're a team of audiophiles, engineers, and music enthusiasts driven by a shared mission: to create exceptional headphone experiences that ignite your senses. We believe everyone deserves to be deeply moved by the music they love, and that's why we pour our hearts into crafting meticulously designed headphones that deliver unparalleled sound quality, comfort, and style.  Whether you're a seasoned audiophile or just discovering the magic of high-fidelity sound, we invite you to join us on this journey of auditory exploration.</p>
          </div>
        </div>
      </div>
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
        onEnter={(element) => {
          setTimeout(() => element.classList.remove("hold"), 1500); // Remove hold after 1.5s
        }}
      >
        <img src={Logo} className="w-[150px] h-[150px]" />
        <h1 className="text-[4rem] font-bold ml-4">Audio</h1>
      </motion.div>
    </div>
  );
};

export default About;
