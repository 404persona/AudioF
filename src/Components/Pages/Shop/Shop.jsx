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
        const response = await axios.get(
          "http://localhost:4000/api/user/getproducts/"
        );
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    FetchData();
  }, []);
  const baseUrl = "http://localhost:4000/uploads/products/";
  return (
    <>
      <div className="  p-1 ">
        {/* Product Cards Code  */}
        {products && products.length > 0 && (
          <motion.ul
            initial={{
              opacity: 0,
              y: "50px",
            }}
            animate={{
              opacity: 1,
              y: "0px",
            }}
            transition={{
              duration: 3,
              ease: [0.2, 1, 0.2, 1],
            }}
            className="flex flex-wrap gap-4 justify-center "
          >
            {products.map((product) => (
              <Link
                to={`/shop/${product._id}`}
                className="relative top-[110px] border-[1.3px] p-1 rounded-xl w-[300px]"
              >
                <div className="bg-white p-3 rounded-xl">
                  <div className="flex flex-col  justify-center ">
                    <div key={product.id}>
                      <img
                        src={`${baseUrl}${product.image[0]}`}
                        className="w-[280px] h-[250px] object-cover"
                      />
                    </div>
                    <div className="mt-2">
                      <div className="text-[1.1rem]">{product.name}</div>
                      <div className="font-semibold">$ {product.price}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </motion.ul>
        )}
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
