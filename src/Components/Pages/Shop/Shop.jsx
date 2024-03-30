import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "../../Header/Logo.png";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    FetchData();
  }, []);
  return (
    <>
      <div className=" bg-[#F6F6F6] flex flex-wrap justify-center  gap-4">
        {products.map((product) => (
          <motion.div
          initial={{
            y:'50px',
            opacity:0
          }}
          animate={{
            y:'0px',
            opacity:1
          }}
          transition={{
            duration:.5,
            ease:'easeIn'
          }}
          >
            <Link
            key={product.id}
            to={`/shop/${product.id}`}
            className="cursor-pointer w-[380px] bg-white flex flex-col rounded-xl items-center relative top-[100px]"
          >
            <div>
              <img src={product.image} className="w-[250px] h-[250px]" />
            </div>
            <div>
              <h1 className="font-semibold text-[1.4rem]">{product.Name}</h1>
            </div>
            <div>
              <h1 className="font-medium text-[1.2rem]">$ {product.Price}</h1>
            </div>
          </Link>
          </motion.div>
        ))}
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
      >
        <img src={Logo} className="w-[150px] h-[150px]" />
        <h1 className="text-[4rem] font-bold ml-4">Audio</h1>
      </motion.div>
    </>
  );
};

export default Shop;
