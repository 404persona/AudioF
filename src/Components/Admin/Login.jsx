import React from 'react'
import Logo from "../Header/Logo.png"
const Login = () => {
  return (
    <div className='bg-[#F6F6F6] w-screen h-screen flex justify-center items-center '>
        <div className=' bg-white w-[500px] h-[500px] flex flex-col justify-center gap-6 items-center p-3 transition-all shadow-lg rounded-lg border-[2px] border-gray-100 hover:border-[2px] hover:border-green-400'>
            <div className='flex justify-center gap-3 mb-6'>
            <img src={Logo} className='w-[60px] h-[60px]' />
            <h1 className='font-semibold text-[2.7rem]'>Audio</h1>
            </div>
            <div className='flex flex-col gap-4'>
                <input type="email" placeholder='Email' className='outline-none border-[2px] border-gray-400 rounded-md p-2 w-[300px] hover:border-green-400 transition-all ' />
                <input type="Password" placeholder='Password' className='outline-none border-[2px] border-gray-400 rounded-md p-2 w-[300px] hover:border-green-400 transition-all ' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <button className='bg-[#0ACF83] font-medium text-[1.1rem] text-white w-[250px] p-1 rounded-xl border-[2px] border-transparent hover:bg-transparent hover:border-[2px] hover:border-green-400 hover:text-gray-500 transition-colors '>LogIn</button>
                <button className='p-2 hover:underline text-gray-500 transition-all'>Forgot Password?</button>
            </div>
        </div>
    </div>
  )
}

export default Login