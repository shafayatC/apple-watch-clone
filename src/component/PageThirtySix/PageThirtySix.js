/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import image45 from '../../images/45.jpg'

const PageThirtySix = () => {
    return (
        <div className=' my-10'>
        <div className='bg-[#F7F7F7] container mx-auto pt-20'>
            <div className='flex justify-between'>

                <div className='pl-20 pt-20 flex flex-col gap-4'>
                 
                    <h1 className='text-[50px] w-[380px] leading-10 font-semibold'>Get up to $190 toward a new Apple Watch.26</h1>
                    {/* <h1 className='text-[44px] -mt-4 font-semibold'>Apple Watch Ultra 2.</h1> */}
                    <p className='text-[20px] font-normal w-[400px] leading-7 '>With Apple Trade In, just give us your eligible Apple Watch and get credit for a new one. It’s good for you and the planet.</p>
                    <a href='#' className='text-blue-600 text-[20px] hover:underline font-semibold'>Find your trade-in value</a>
                </div>
                <div className='pr-20'>
                    <img src={image45}/>
                </div>
            </div>
        </div>
        
    </div>
    );
};

export default PageThirtySix;