import React from 'react'
import {motion} from 'framer-motion'
import Logo from "../../Header/Logo.png"

const Contact = () => {
  return (
    <div>
      <div></div>
      <motion.div 
      className="fixed top-0 left-0 w-full h-[100vh] bg-white/60 flex flex-col items-center justify-center backdrop-blur-lg z-10 "
      initial={{
        y:'-100%'
      }}
      animate={{
        y:'100%'
      }}
      transition={{
        duration:3,
        ease:[0.2, 1, 0.2, 1]
      }}
      onEnter={(element) => {
        setTimeout(() => element.classList.remove('hold'), 1500); // Remove hold after 1.5s
      }}
      >
        <img src={Logo} className="w-[150px] h-[150px]" />
        <h1 className="text-[4rem] font-bold ml-4">Audio</h1>
        {/* <div className="hold "></div> */}
      </motion.div>
    </div>
  )
}

export default Contact