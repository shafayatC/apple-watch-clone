import React from 'react';
import image1 from "../../images/19.jpg"
import image2 from "../../images/19.2.jpg"

const PageSeventeen = () => {
    return (
        <div className='py-10 '>
            <div className='bg-[#F7F7F7] container mx-auto'>
                <div className='flex justify-center gap-60'>
                    <div className='flex flex-col items-center pt-40 gap-20'>
                        <div>
                            <p className='w-[400px] leading-5 font-semibold text-[#9B9B9F]'>
                                <span className='font-semibold text-black'>Trail Loop. Comfort for the long run.</span>
                                Designed to be light, thin, and flexible. It features a convenient pull tab for quick adjustments during workouts. Extra stretch built into the nylon weave makes it easy to cinch for optimal fit. The Trail Loop is made with recycled content and is carbon neutral. Available in three striking new colors.
                            </p>
                        </div>
                        <div>
                            <img src={image1}/>
                        </div>
                    </div>
                    <div className='max-w-[210px]'>
                        <img src={image2}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageSeventeen;