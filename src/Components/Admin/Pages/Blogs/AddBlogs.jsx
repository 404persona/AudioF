import React from 'react'
import BlogForm from './BlogForm'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";

const AddBlogs = () => {
   const navigate = useNavigate()
  const Handlejump = () => {
    navigate(-1)
  }
  return (
    <div>
      <div>
      <div className='w-[20px] text-[1.5rem] cursor-pointer pb-4 text-gray-500 hover:text-green-500' 
      onClick={Handlejump}
      >
      <IoIosArrowBack />
      </div>
      </div>
      <BlogForm/>
    </div>
  )
}

export default AddBlogs