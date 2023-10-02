import React from 'react';
import pageseven from "../../images/9.png"

const PageSeven = () => {
    return (
        <div className='h-full'>
            <div className='container mx-auto'>
                <div className='flex justify-center items-center'>
                    <div className='flex justify-center items-center gap-10 pt-40'>
                        <div>
                            <img src={pageseven}/>
                        </div>
                        <div>
                            <p className='text-[18px] w-[600px] text-[#86868B] font-semibold'><span className='text-black'>Battery life for days. </span> When you’re on the second day of a backpacking trip, the final leg of a triathlon, or diving along a coral reef, the last thing you want to think about is running out of battery. With Apple Watch Ultra 2, you can take on almost anything and have energy to spare.4</p>
                        </div>
                    </div>

                </div>

                <div className='flex justify-center gap-20 mt-32 mb-32'>
                    <div>
                        <p className='text-[18px]'>Up to</p>
                        <p className='text-[80px] font-bold -mt-5 -ml-1 text-[#F56900]'>36hrs</p>
                        <p className='text-[18px] -mt-5'>of normal use4</p>
                    </div>
                    <div>
                        <p className='text-[18px]'>Up to</p>
                        <p className='text-[80px] font-bold -mt-5 -ml-1 text-[#F56900]'>72hrs</p>
                        <p className='text-[18px] -mt-5'>of normal use with low <br></br> power settings enabled5</p>
                    </div>
                    <div>
                        <p className='text-[18px]'>Up to</p>
                        <p className='text-[80px] font-bold -mt-5 -ml-1 text-[#F56900]'>17hrs</p>
                        <p className='text-[18px] -mt-5'>workout use in Low <br></br> Power Mode6
</p>
                    </div>
                   

                </div>

            </div>
        </div>
    );
};

export default PageSeven;