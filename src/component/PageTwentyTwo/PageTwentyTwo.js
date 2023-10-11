import React from 'react';
import image25 from "../../images/25.jpg"

const PageTwentyTwo = () => {
    return (
        <div className='bg-[#F7F7F7] '>
            <div className='container mx-auto py-32'>
                <div className='flex justify-center items-center gap-20'>

                    <div>
                        <img src={image25}/>
                    </div>
                    <div className=''>
                    <p className='w-[460px] leading-6 text-[#86868B] font-semibold text-[18px]'><span className='text-black'>Built for the back country.</span>Advanced map details make Apple Watch Ultra 2 a vital companion out in the wild. New topographic maps show physical features in over 1000 national and regional parks in the U.S., including mountains, valleys, and bodies of water, with details like trails, contour lines, elevation, and points of interest. And see detailed trail information such as length, photos, and more.</p>
                    </div>
                  
                </div>
            </div>
        </div>
    );
};

export default PageTwentyTwo;