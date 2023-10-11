/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import image44 from '../../images/44.png'
import image441 from '../../images/44.jpg'
const PageThirtyFive = () => {
    return (
        <div className=' my-10'>
        <div className='bg-[#F7F7F7] container mx-auto py-10'>
            <div className='flex justify-center items-center gap-20'>
            <div className=''>
                    <img src={image441}/>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={image44}/>
                    <h1 className='text-[20px] font-semibold'>From HIIT to Meditation,</h1>
                    <h1 className='text-[20px] -mt-1 font-semibold'>there’s something for everyone.</h1>
                   <div className='flex justify-center gap-3 font-semibold'>
                    <a href='#' className='text-blue-500 hover:underline '>Try it free</a>
                    <a  href='#' className='text-blue-500 hover:underline '>Learn more</a>
                   </div>
                </div>
                
            </div>
        </div>
        
    </div>
    );
};

export default PageThirtyFive;