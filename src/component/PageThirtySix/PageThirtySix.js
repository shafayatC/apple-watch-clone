import React from 'react';
import image45 from '../../images/45.jpg'

const PageThirtySix = () => {
    return (
        <div className=' my-10'>
        <div className='bg-[#F7F7F7] container mx-auto pt-20'>
            <div className='flex justify-between'>

                <div className='pl-20 pt-20'>
                 
                    <h1 className='text-[44px] w-[380px] leading-10 font-semibold'>Get up to $190 toward a new Apple Watch.26</h1>
                    {/* <h1 className='text-[44px] -mt-4 font-semibold'>Apple Watch Ultra 2.</h1> */}
                    <p className='text-[24px] font-semibold w-[400px] leading-7'>Just open this page in Safari on your iPhone or iPad.</p>
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