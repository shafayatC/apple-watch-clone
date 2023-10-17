/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import img14 from "../../images/14.jpg"

const PageTwelve = () => {
    return (
        <div className='container mx-auto h-full pb-20 '>
            <div className='mt-[75%]'>
                <div className='ml-40 pt-20 pb-20'>
                    <h1 className='text-[65px] font-bold mb-4'>Find strength in numbers.</h1>
                    <p className='w-[800px] leading-7 text-[#86868B] font-semibold text-[24px]'><span className='text-black'>More views. More motivating.</span>Apple Watch Ultra 2 now connects to cycling accessories like power meters via Bluetooth. For a better view of your performance during a ride, start a cycling workout from your watch, and it will automatically show up as a Live Activity on your iPhone, which can be attached to your handlebars with optional accessories.</p>                 
                </div>
                <div className='flex justify-center'>
                    <img src={img14}/>
                </div>
            </div>
        </div>
    );
};

export default PageTwelve;