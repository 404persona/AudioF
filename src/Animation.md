 <motion.div
        className="fixed top-0 left-0 w-full h-[100vh] bg-white/30 flex flex-col items-center justify-center backdrop-blur-lg z-10 "
        initial={{ y: "-100%" }}
        animate={{ y: "100%" }}
        transition={{ duration: 3, ease: [0.2, 1, 0.2, 1] }}
      >
        <img src={Logo} className="w-[150px] h-[150px]" alt="Logo" />
        <h1 className="text-[4rem] font-bold ml-4">Audio</h1>
      </motion.div>