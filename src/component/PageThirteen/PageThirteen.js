import React from 'react';
import groupWatch1 from '../../images/15.jpg'
import groupWatch2 from '../../images/15.2.jpg'
import groupWatch3 from '../../images/15.3.jpg'

const PageThirteen = () => {
    return (
        <div className='bg-[#F7F7F7]'>
            <div className='container mx-auto py-40'>
                <div className='flex justify-center gap-10'>
                    <div className='flex flex-col items-center gap-6'>
                        <img src={groupWatch1} />
                        <div>
                        <h1 className='font-semibold'>Heart Rate Zones</h1>
                        <p className='w-[300px] text-[#9B9B9F] font-semibold leading-5'>Quickly see your intensity level. Training zones are automatically calculated and personalized using your health data, or you can create them manually.</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-6'>
                        <img src={groupWatch2} />
                        <div>
                        <h1 className='font-semibold'>Multisport workout</h1>
                        <p className='w-[300px] text-[#9B9B9F] font-semibold leading-5'>Combine running, cycling, or swimming into a single workout. The Workout app will automatically recognize when you switch between activities.</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-6'>
                        <img src={groupWatch3} />
                        <div>
                        <h1 className='font-semibold'>Support for fitness apps</h1>
                        <p className='w-[300px] text-[#9B9B9F] font-semibold leading-5'>Apple Watch Ultra 2 supports custom workout APIs so apps like TrainingPeaks can directly export your scheduled workouts to the Workout app.</p>
                        </div>
                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default PageThirteen;