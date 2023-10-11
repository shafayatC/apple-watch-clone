import React from 'react';
import groupWatch1 from '../../images/16.jpg'
import groupWatch2 from '../../images/16.2.jpg'
import groupWatch3 from '../../images/16.3.jpg'

const PageFourteen = () => {
    return (
        <div>
        <div className='container mx-auto py-32'>
            <div className='pl-40 pb-32'>
                <p className='text-[65px] font-bold leading-5'>Running metrics</p>
                <p className='text-[65px] font-bold'>that go the extra mile.</p>
            </div>
            <div className='flex justify-center gap-10'>
                <div className='flex flex-col items-center gap-6'>
                    <img src={groupWatch1} />
                    <div>
                    <h1 className='font-semibold'>Custom workouts</h1>
                    <p className='w-[300px] text-[#9B9B9F] font-semibold leading-5'>Set the time and distance goals of each interval of your workout. And add warmups, cooldowns, and recovery intervals.</p>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-6'>
                    <img src={groupWatch2} />
                    <div>
                    <h1 className='font-semibold'>Advanced running metrics</h1>
                    <p className='w-[300px] text-[#9B9B9F] font-semibold leading-5'>Measure Stride Length, Ground Contact Time, and Vertical Oscillation. Train for specific time goals with Pacer. And compete against your previous times with Race Route.</p>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-6'>
                    <img src={groupWatch3} />
                    <div>
                    <h1 className='font-semibold'>Track detection</h1>
                    <p className='w-[300px] text-[#9B9B9F] font-semibold leading-5'>Workout detects when you arrive at a track, and uses both Apple Maps data and GPS to provide the most accurate pace, distance, and route map.</p>
                    </div>
                </div>

            </div>

        </div>
        
    </div>
    );
};

export default PageFourteen;