import React from 'react';
import watch1 from "../../images/10.jpg"
import watch2 from "../../images/10.2.jpg"
import watch3 from "../../images/10.3.jpg"

const PageNine = () => {
    return (
        <div className='bg-[#F7F7F7] pb-20'>
            <div className='container mx-auto'>
                <div className='pt-40 ml-40'>
                    <div>
                        <p className='bg-[#F7E8DE] text-[#BD5517] mb-7 font-semibold rounded-md text-center w-48'>Available in October</p>
                    </div>
                    <div>
                        <p className='w-[500px] mr-24 text-[#86868B] font-semibold text-[18px]'><span className='text-black'>Magic. At your fingertips.</span> Quickly and easily interact with your Apple Watch Ultra 2 without touching the display. Double tap your index finger and thumb to answer calls, pause and resume timers, and more. It makes everyday actions even easier, especially in demanding situations where you don’t have an extra hand to spare.</p>
                    </div>
                </div>

                <div className='flex justify-center gap-5 mt-20'>
                        <div className='flex flex-col items-center gap-5'>
                            <img src={watch1}/>
                            <p className='font-semibold'>Respond to a message</p>
                        </div>
                        <div className='flex flex-col items-center gap-5'>
                            <img src={watch2}/>
                            <p className='font-semibold'>Answer a call</p>
                        </div>
                        <div className='flex flex-col items-center gap-5'>
                            <img src={watch3}/>
                            <p className='font-semibold'>Pause a timer</p>
                        </div>
                </div>

            </div>
            
        </div>
    );
};

export default PageNine;