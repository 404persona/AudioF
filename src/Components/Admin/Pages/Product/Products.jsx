import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { DeleteProduct } from "../../../../../../Server/Controllers/ProductControl";

const Products = () => {
  const [Products, setProducts] = useState([]); // Set Users as an empty array initially
  const [isLoading, setIsLoading] = useState(true); // Set initial loading state to true
  const [Error, setError] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/user/getproducts"
        );
        console.log(response);
        setProducts(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);
  const DeleteProduct = async (productId) => { // Renamed for clarity
    try {
      const response = await axios.delete(`http://localhost:4000/api/user/deleteproduct/${productId}`);
      console.log("User deleted successfully:", response.data); // Log response for confirmation
      setProducts(Products.filter((product) => product._id !== productId)); // Update state after successful deletion
    } catch (error) {
      console.error("Error deleting Product:", error);
      setError(error); // Update error state for display
    } finally {
      setIsLoading(false); // Set loading state to false even in case of errors
    }
  };
  const baseUrl = "http://localhost:4000/uploads/";
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (Error) {
    return <h1>{Error.message}</h1>; // Display error message
  }
  return (
    <div>
      <div className="flex justify-end">
        <Link
          to="addproducts"
          className="text-white bg-green-400 p-1 rounded-lg font-medium hover:bg-transparent hover:text-black hover: border-[1.5px] hover:border-green-400 transition-all shadow-sm"
        >
          Add Products
        </Link>
      </div>
      <div className="flex flex-row flex-wrap gap-6">
        {Products.map((products) => (
          <>
            <div>
              <div className="w-[280px]  flex flex-col justify-center p-2 shadow-lg  rounded-xl hover:shadow-xl transition-all">
                <img src={`${baseUrl}${products.image[0]}`} alt={products.name} />
                <div className="pt-4 flex flex-col gap-1 font-medium pl-2">
                <h1>{products.name}</h1>
                {/* <h3 className="text-gray-500 text-[.9rem] font-semibold">Category: <span>{products.category}</span></h3> */}
                <h3>Price : <span>$ {products.price}</span></h3>
                </div>
                <div className="my-2 flex justify-between px-2">
                  <button className="p-1 bg-green-400 rounded-md text-white font-medium w-[70px]">Edit</button>
                  <button  onClick={() => DeleteProduct(products._id)} className="p-1 bg-red-400 rounded-md text-white font-medium w-[70px]">Delete</button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
export default Products;