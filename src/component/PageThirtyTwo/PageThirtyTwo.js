import React from 'react';
import image39 from "../../images/39.1.jpg"

const PageThirtyTwo = () => {
    return (
        <div>
           <div className='container mx-auto' >
                <div className='pt-40 pl-20 pb-28'>
                    <h1 className='font-bold text-[28px]'>Even more to discover</h1>
                    <h1 className='text-[110px] -mt-4 font-bold'>Everything to love</h1>
                    <h1 className='text-[110px] -mt-9 font-bold'>about Apple Watch.</h1>
                    <p className='w-[600px] font-semibold text-[28px] text-[#86868B] leading-7'>With features that help you stay healthy, safe, and connected, the watch that pushes limits is also one you can wear every day.</p>
                </div>

                <div className='flex justify-center'>
                    <img src={image39}/>
                </div>
           </div>
        </div>
    );
};

export default PageThirtyTwo;