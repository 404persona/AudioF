import React, { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import ProductForm from './ProductForm';

const AddProducts = () => {
  const navigate = useNavigate()
  const Handlejump = () => {
    navigate(-1)
  }
  
  return (
    <>
      <div className='w-[20px] text-[1.5rem] cursor-pointer text-gray-500 hover:text-green-500' 
      onClick={Handlejump}
      >
      <IoIosArrowBack />
      </div>
      <ProductForm/>

    </>
  )
}

export default AddProducts