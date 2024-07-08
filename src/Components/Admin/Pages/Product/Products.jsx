import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Products = () => {
  const {_id} = useParams()
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/user/getproducts"
        );
        setProducts(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const deleteProduct = async (productId) => {
    try {
      const response = await axios.delete(`http://localhost:4000/api/deleteproduct/${productId}`);
      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const baseUrl = "http://localhost:4000/uploads/products/";

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      <div className="flex justify-end">
        <Link
          to="addproducts"
          className="text-white bg-green-400 p-1 rounded-lg font-medium hover:bg-transparent hover:text-black hover:border-[1.5px] hover:border-green-400 transition-all shadow-sm"
        >
          Add Products
        </Link>
      </div>
      <div className="flex flex-row flex-wrap gap-6">
        {products.map((product) => (
          <div key={product._id}>
            <div className="w-[280px] flex flex-col justify-center p-2 shadow-lg rounded-xl hover:shadow-xl transition-all">
              <img src={`${baseUrl}${product.image[0]}`} alt={product.name} />
              <div className="pt-4 flex flex-col gap-1 font-medium pl-2">
                <h1>{product.name}</h1>
                <h3>Price: <span>$ {product.price}</span></h3>
              </div>
              <div className="my-2 flex justify-between px-2">
                <Link to={`update-product/${product._id}`}>
                  <button className="p-1 bg-green-400 rounded-md text-white font-medium w-[70px]">Edit</button>
                </Link>
                <button onClick={() => deleteProduct(product._id)} className="p-1 bg-red-400 rounded-md text-white font-medium w-[70px]">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
