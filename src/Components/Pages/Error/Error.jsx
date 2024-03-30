import React from 'react'
import Logo from "../../Header/Logo.png"

const Error = () => {
  return (
    <div className='w-screen h-screen flex justify-center content-center'>
        <div className='flex  flex-col justify-center'>
        <div className=' w-[270px] text-[6rem] flex font-bold justify-between items-center'>
            <h1>4</h1>
            <img src={Logo} className='w-[85px] h-[80px]' />
            <h1>4</h1>
        </div>
        <div className='flex justify-center text-[1.5rem] font-semibold'>
            404- Page Not Found
        </div>
    </div>
    </div>
  )
}

export default Error