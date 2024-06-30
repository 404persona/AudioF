import React, { useEffect, useState } from 'react'
import axios from 'axios'
<<<<<<< HEAD
import { Link, useParams } from 'react-router-dom'
=======
import { Link } from 'react-router-dom'
>>>>>>> 8d7d9404128b1327d70a6ffbd071309cff800a82

const FearuredProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(()=> {
        const FetchData = async () => {
            try {
<<<<<<< HEAD
              const response = await axios.get("http://localhost:4000/api/user/getproducts/");
=======
              const response = await axios.get("http://localhost:3000/products");
>>>>>>> 8d7d9404128b1327d70a6ffbd071309cff800a82
              setProducts(response.data);
              console.log(products);
            } catch (error) {
              console.log(error);
            }
          };
          FetchData();
    },[])
<<<<<<< HEAD
    const baseUrl = "http://localhost:4000/uploads/products/";
=======
>>>>>>> 8d7d9404128b1327d70a6ffbd071309cff800a82
  return (
    <div>
        <div className='pt-16 mx-[40px]'>
            <div className='flex text-[1.2rem] justify-between font-semibold py-8'>
                <p>Featured Products</p>
                <p className='text-gray-500'>See All</p>
            </div>
<<<<<<< HEAD
                <div className='flex flex-wrap justify-center gap-4'>
              {products.slice(0 , 6).map((product)=>(
                <Link to={`/shop/${product._id}`} className='bg-white flex transition-all duration-250 flex-col pb-3 pt-2 rounded-xl shadow-md'>
                    <div>
                        <img   src={`${baseUrl}${product.image[0]}`} className='w-[280px] h-[250px] object-cover' />
                    </div>
                    <div className='pl-4 pt-2 font-semibold text-[1.1rem]'>
                        <h1>{product.name}</h1>
                    </div>
                    <div className='pl-4 font-semibold text-[1rem]'>
                        <h1>$ {product.price}</h1>
=======
                <div className='flex flex-wrap justify-center gap-6'>
              {products.slice(0 , 6).map((product)=>(
                <Link to={`/shop/${product.id}`} className='bg-white flex hover:scale-105 transition-all duration-250 flex-col pb-3 pt-2 rounded-xl shadow-md'>
                    <div>
                        <img src={product.image} className='w-[330px] h-[320px] ' />
                    </div>
                    <div className='pl-4 font-semibold text-[1.3rem]'>
                        <h1>{product.Name}</h1>
                    </div>
                    <div className='pl-4 font-semibold text-[1.3rem]'>
                        <h1>$ {product.Price}</h1>
>>>>>>> 8d7d9404128b1327d70a6ffbd071309cff800a82
                    </div>
                </Link>
              ))}
                </div>
        </div>
    </div>
  )
}

export default FearuredProducts