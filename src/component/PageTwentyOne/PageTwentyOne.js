import React from 'react';
import image24 from "../../images/24.jpg"

const PageTwentyOne = () => {
    return (
        <div className='bg-black '>
            <div className='container mx-auto py-32'>
                <div className='flex justify-center items-center gap-20'>
                    <div className=''>
                    <p className='w-[460px] leading-6 text-[#86868B] font-semibold text-[18px]'><span className='text-white'>Backtrack. Retrace your steps.</span>To help you return to where you came from, or simply get back on route, Backtrack uses GPS data to automatically create a path of where you’ve been — even if you’re off the grid. So you can easily get to a previous location or all the way back down the mountain.</p>
                    </div>
                    <div>
                        <img src={image24}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageTwentyOne;