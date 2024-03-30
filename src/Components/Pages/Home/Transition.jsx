import React from "react";
import { motion } from "framer-motion";

const Transition = () => {
  return (
    <>
      
      
      < motion.div
      className="z-50 fixed top-0 left-0 w-full h-full bg-green-300 origin-top"
        initial={{
          scaleY: 1,
        }}
        animate={{
          scaleY: 0,
        }}
        exit={{ scaleY: 0 }}
        transition={{
          duration: 2,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </>
  );
};

export default Transition;
