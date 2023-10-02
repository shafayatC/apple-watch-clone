import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { FaApple } from "react-icons/fa";

const Header = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <ul className='manu-wrapper flex flex-row justify-between h-[44px] text-xs'>
                    <li className='flex items-center'><a className='p-0 px-5 h-full items-center flex' href='#'><FaApple className='text-[#6e6e72] hover:text-black cursor-pointer text-[18px]'/></a></li>
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
                    <li><AiOutlineSearch/></li>
                    <li><BsBag/></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;