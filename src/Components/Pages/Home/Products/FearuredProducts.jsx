import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const FearuredProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(()=> {
        const FetchData = async () => {
            try {
              const response = await axios.get("http://localhost:4000/api/user/getproducts/");
              setProducts(response.data);
              console.log(products);
            } catch (error) {
              console.log(error);
            }
          };
          FetchData();
    },[])
    const baseUrl = "http://localhost:4000/uploads/products/";
  return (
    <div>
        <div className='pt-16 mx-[40px]'>
            <div className='flex text-[1.2rem] justify-between font-semibold py-8'>
                <p>Featured Products</p>
                <p className='text-gray-500'>See All</p>
            </div>
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
                    </div>
                </Link>
              ))}
                </div>
        </div>
    </div>
  )
}

export default FearuredProducts