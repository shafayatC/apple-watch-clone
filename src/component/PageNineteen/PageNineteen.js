import React from 'react';
import img21 from '../../images/21.jpg'
import img22 from '../../images/22.2.png'

const PageNineteen = () => {
    return (
        <div className='bg-black'>
            <div className='container mx-auto -mt-[150px]'>
                <div className='relative'>
                    <img src={img21}/>
                    <p className='absolute top-[40%] right-[10%] w-[550px] text-white text-2xl font-semibold leading-7'>Designed to take on a wide range of environments, elevations, and temperatures, Apple Watch Ultra 2 is an essential exploration tool that can take you everywhere. And help get you home.</p>
                </div>

                <div className='flex flex-col items-center pt-32 pb-32'>
                    <h1 className='text-white text-[60px] font-bold'>The compass reimagined.</h1>
                    <p className='w-[600px] text-white text-2xl font-semibold leading-7'>An accurate compass is as crucial for navigating the wild as a solid pair of boots. Additions to the Compass app deliver views and functionality that take wrist-driven orienteering to new heights.</p>
                </div>

                <div className='flex justify-center'>
                    <img src={img22}/>
                </div>

            </div>
            
        </div>
    );
};

export default PageNineteen;