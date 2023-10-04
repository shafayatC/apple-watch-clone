import React from 'react';
import img29 from '../../images/29.jpg'
const PageTwentySix = () => {
    return (
        <div className='bg-black -mt-52'>
        <div className='container mx-auto'>
            <div className='relative'>
                <img src={img29}/>
                
            </div>

            <div className='flex justify-end pt-32 mr-32'>
                <p className='w-[450px] text-white font-semibold text-2xl leading-6'>Built to withstand jetskiing in Maunalua Bay or kitesurfing the Gorge. Apple Watch Ultra 2 features a depth gauge and the data and functionality required by scuba and freedivers for descents down to 40 meters.</p>
            </div>

            <div className='flex flex-col items-end pt-32 pb-32 mr-20'>
                <h1 className='text-[#F56900] mr-[165px] text-[40px] font-bold'>EN13319 certified</h1>
                <p className='w-[500px] text-white text-xl font-semibold leading-7'>An internationally recognized standard for diving accessories.</p>
            </div>

          

        </div>
        
    </div>
    );
};

export default PageTwentySix;