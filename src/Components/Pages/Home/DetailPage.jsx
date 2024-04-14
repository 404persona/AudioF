import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "../../Header/Logo.png";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailPage = () => {
  const { productId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/products/${productId}`
        );
        setProducts(response.data);
        console.log(products);
      } catch (error) {
        console.log(error);
      }
    };
    FetchData();
  }, [productId]);
  return (
    <div>
      <motion.div
        className="fixed top-0 left-0 w-full h-[100vh] bg-white/60 flex flex-col items-center justify-center backdrop-blur-lg z-10 "
        initial={{ y: "-100%" }}
        animate={{ y: "100%" }}
        transition={{ duration: 3, ease: [0.2, 1, 0.2, 1] }}
      >
        <img src={Logo} className="w-[150px] h-[150px]" alt="Logo" />
        <h1 className="text-[4rem] font-bold ml-4">Audio</h1>
      </motion.div>
      {products && (
        <div className="pt-[150px] flex">
          <img src={products.image} className="w-[400px] h-[400px]" />
          <div className="flex flex-col">
            <h1>{products.Name}</h1>
            <h1>{products.Price}</h1>
            <p>{products.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
