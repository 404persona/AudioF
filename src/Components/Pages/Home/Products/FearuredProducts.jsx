import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const FearuredProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(()=> {
        const FetchData = async () => {
            try {
              const response = await axios.get("http://localhost:3000/products");
              setProducts(response.data);
              console.log(products);
            } catch (error) {
              console.log(error);
            }
          };
          FetchData();
    },[])
  return (
    <div>
        <div className='pt-16 mx-[40px]'>
            <div className='flex text-[1.2rem] justify-between font-semibold py-8'>
                <p>Featured Products</p>
                <p className='text-gray-500'>See All</p>
            </div>
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
                    </div>
                </Link>
              ))}
                </div>
        </div>
    </div>
  )
}

export default FearuredProducts