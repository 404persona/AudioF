import React from 'react'
import Logo from "../Header/Logo.png"
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Footer = ({ showSubscription }) => {
    return (
        <footer className='mt-12'>
            {showSubscription && (<div className='max-sm:flex max-sm:justify-center md:flex md:justify-center '>
                <div className='flex max-sm:flex-col gap-14 justify-between items-center w-[80%] bg-gradient-to-l from-green-400 to-green-500 px-12 p-6 rounded-2xl border-black border-[2px] shadow-xl relative md:top-[40px] '>
                    <div className='max-sm:text-center text-white text-[1.7rem] font-medium '>
                        Subscribe to our Newsletter
                    </div>
                    <form>
                        <div className='flex max-sm:gap-2 md:gap-4' >
                            <input type="email" className='outline-none border-1 rounded-lg p-2 md:w-[300px] bg-white/90 border-black border-[1px]' />
                            <button type='submit' className='bg-black text-white hover:text-white hover:bg-black/40 transition-all p-2 font-semibold rounded-lg'>Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>)}
            <div className='bg-[#F6F6F6]'>
                <div className='pt-6'>
                    <div className='flex justify-between  md:p-16 max-sm:p-8'>
                        <div className='flex items-center gap-3'>
                            <img src={Logo} alt="Audio" className='md:w-[60px] md:h-[60px] max-sm:w-[45px]' />
                            <h1 className='md:text-[2rem] max-sm:text-[1.8rem] font-bold'>Audio</h1>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div>
                                <FaFacebook className='text-green-400 text-[2rem]' />
                            </div>
                            <div>
                                <AiFillTwitterCircle className='text-green-400 text-[2rem]' />
                            </div>
                            <div className='text-[2rem] text-green-400'>
                                <RiInstagramFill />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-6 justify-center items-center text-[1.3rem]">
                    <a>About Us</a>
                    <a>Our Team</a>
                    <a>Careers</a>
                    <a>Products</a>
                    <a>Services</a>
                    <a>Case Studies</a>
                    <a>FAQ</a>
                    <Link to='/blogs' >Blogs</Link>
                    <a>Contact Us</a>
                </div>
                <div className="text-center pt-12 pb-2">
                    <p>© 2024 <span className='relative left-1' >Anas Ahmad</span></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer