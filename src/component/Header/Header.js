import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { FaApple } from "react-icons/fa";

const Header = () => {
    return (
        <>
            <div >
                <div className='container mx-auto'>
                    <ul className='manu-wrapper flex flex-row justify-between h-[44px] text-xs'>
                        <li className='flex items-center'><a className='p-0 pl- pr-5 h-full items-center flex' href='#'><FaApple className='text-[#6e6e72] hover:text-black cursor-pointer text-[18px]' /></a></li>
                        <li><a className='p-0 px-5 h-full items-center flex' href=''>Store</a></li>
                        <li><a className='p-0 px-5 h-full items-center flex' href=''>Mac</a></li>
                        <li><a className='p-0 px-5 h-full items-center flex' href=''>iPad</a></li>
                        <li><a className='p-0 px-5 h-full items-center flex' href=''>iPhone</a></li>
                        <li><a className='p-0 px-5 h-full items-center flex' href=''>Watch</a></li>
                        <li><a className='p-0 px-5 h-full items-center flex' href=''>Vision</a></li>
                        <li><a className='p-0 px-5 h-full items-center flex' href=''>AirPods</a></li>
                        <li><a className='p-0 px-5 h-full items-center flex' href=''>TV & Home</a></li>
                        <li><a className='p-0 px-5 h-full items-center flex' href=''>Entertainment</a></li>
                        <li><a className='p-0 px-5 h-full items-center flex' href=''>AirTag</a></li>
                        <li><a className='p-0 px-5 h-full items-center flex' href=''>Accessories</a></li>
                        <li><a className='p-0 px-5 h-full items-center flex' href=''>Support</a></li>
                        <li className=''><span className='p-0 px-5 h-full items-center flex text-xl'><AiOutlineSearch /></span></li>
                        <li> <span className='p-0 pl-5 h-full items-center flex text-base'><BsBag /></span></li>
                    </ul>
                </div>
            </div>

            <div className='navStickWrapper z-50 top-0 sticky h-[58px] flex flex-col justify-center' style={{background: "rgba(251,251,253,0.8)", backdropFilter: "saturate(180%) blur(20px)"}}>
                <div className='container mx-auto '>
                    <div className='grid grid-cols-2'>
                        <h1 className='text-xl font-semibold'>Apple Watch Ultra 2</h1>
                        <div className='flex w-full items-center justify-end'>
                            <ul className='flex flex-row items-center gap-7 text-xs'>
                                <li><a href='#' className='text-gray-400'>Overview</a></li>
                                <li><a href='#' className='hover:colors-[#0071e3]'>Why Apple Watch </a></li>
                                <li><a className='bg-[#0071e3] text-white px-3 py-1 rounded-2xl' href='#'>Buy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;