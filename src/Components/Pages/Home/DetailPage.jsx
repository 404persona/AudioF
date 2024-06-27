import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "../../Header/Logo.png"; // Assuming Logo is an image
import { useParams } from "react-router-dom";
import axios from "axios";
const DetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [CurrentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/user/product/${productId}`
        );
        setProduct(response.data);
      } catch (error) {
        setError(error);
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, [productId]);
  const BaseUrl = "http://localhost:4000/uploads/products/";
  if (error) {
    return <div>Error fetching product details: {error.message}</div>;
  }

    if (!product) {
      return (
        <div className="loading-container">
          <p>Loading product details...</p>
        </div>
      );
    }
  const animationVariants = {
    hidden: { y: "-100%", overflow: "hidden" },
    visible: { y: "0%", overflow: "auto" },
  };
  const imageVariants = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.1 } },
  };

  return (
    <div>
      <motion.div
        className="fixed top-0 left-0 w-full h-[100vh] bg-white/30 flex flex-col items-center justify-center backdrop-blur-lg z-10 "
        initial={{ y: "-100%" }}
        variants={animationVariants}
        transition={{ duration: 3, ease: [0.2, 1, 0.2, 1] }}
      >
        <img src={Logo} className="w-[150px] h-[150px]" alt="Logo" />
        <h1 className="text-[4rem] font-bold ml-4">Audio</h1>
      </motion.div>
      <div className="pt-[150px] flex justify-evenly items-center">
        <div className="">
          <div className="flex gap-2 items-center flex-col-reverse">
            <div className="flex   gap-1">
              {product.image.map((image, index) => (
                <div>
                  <motion.img
                    key={index}
                    src={`${BaseUrl}${image}`}
                    className={`w-[100px] border-[1px] p-2 rounded-xl hover:border-green-400 transition-colors h-[87px] 
                    ${
                      CurrentImage === index
                        ? "border-green-400 border-2 opacity-75"
                        : ""
                    }`}
                    initial={imageVariants.initial}
                    animate={imageVariants.enter}
                    exit={imageVariants.exit}
                    variants={imageVariants}
                    onClick={() => setCurrentImage(index)}
                  />
                </div>
              ))}
            </div>
            <div>
              <motion.img
                src={`${BaseUrl}${product.image[CurrentImage]}`} // Access current image
                className="w-[400px] border-[1px]  p-3 rounded-xl"
                initial={imageVariants.initial}
                animate={imageVariants.enter}
                exit={imageVariants.exit}
                variants={imageVariants}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 w-[600px]">
          <h1 className="font-semibold text-[2.2rem]">{product.name}</h1>
          <p className="text-[1.2rem]">{product.shortdescription}</p>
          <div className="font-bold text-[1.4rem]">
            $ {product.price.toFixed(2)}
          </div>
          <div className="flex gap-6">
            <button className="bg-green-400 w-[150px] border-[1.5px] text-white font-semibold p-2 rounded-lg Hover:shadow-md hover:bg-transparent hover:border-green-400 hover:text-black transition-all ">
              Add To Cart
            </button>
            <button className="hover:bg-green-400 w-[150px] border-[1.5px] border-green-400 hover:text-white font-semibold p-2 rounded-lg hover:shadow-md transition-all">
              Buy Now
            </button>
            {/* <p>{product.description}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailPage;
