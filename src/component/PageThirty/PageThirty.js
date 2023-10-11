import React from 'react';
import image25 from "../../images/25.png"

const PageThirty = () => {
    return (
        <div className='bg-black py-32'>
            <div className=' flex justify-center  mt-20 gap-28'>              
                    <div>
                        <img src={image25}/>
                    </div>
                    <div>
                        <p className='w-[420px] leading-6 text-[#86868B] font-semibold text-[18px]'><span className='text-white'>Innovation that goes deep.</span>The Depth app is ideal for tracking recreational underwater activity. It activates automatically when you submerge and shows the time, current depth, water temperature, duration under water, and maximum depth you’ve reached. It also shows a dive summary on your watch, and saves a log of each session in the Fitness app on your iPhone. This gives you a complete history of your dives, including a graph of the dive and a map showing the GPS entry point.</p>
                    </div>   
                </div>
        </div>
    );
};

export default PageThirty;