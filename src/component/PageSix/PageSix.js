import React from 'react';
import pagesiximage from '../../images/6.jpg'
import pagesiximage2 from '../../images/7.png'
import pagesiximage3 from '../../images/8.png'

const PageSix = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <div className='pt-40 pb-40'>
                    <p className='text-[18px] pl-20 w-[490px] text-[#86868B] font-semibold'><span className='text-black'>Ready for Action.</span> The customizable Action button gives you quick, physical control over a variety of functions. It can do things like start a workout, mark a Compass Waypoint, or begin a dive. Just like you, it’s full of potential.</p>
                </div>

                <div className='flex flex-col items-center  '>
                    <img className='' src={pagesiximage}/>

                    
                </div>
               

            </div>
            <div className='-mt-[450px]'>
                <div className=' flex justify-center '>
                        <div className='w-[1269px] bg-[#F7F7F7]  h-[300px]'>
                        <p className='text-[18px] pt-40 pb-10 pl-20 w-[550px] text-[#86868B] font-semibold'><span className='text-black'>Everything in its place. </span> An essential and versatile tool that fits on your wrist, Apple Watch Ultra 2 packs incredible capability into a surprisingly compact space.</p>
                        </div>
                    
                    </div>
            <div className='flex justify-center'>
                    <img src={pagesiximage2}/>
                </div>
                <div className=' flex justify-center mt-20 '>
                    <div className='w-[1275px] bg-[#F7F7F7]  h-40'>

                    </div>
                    
                </div>
            </div>
            <div className='flex justify-center'>
                
                    <img src={pagesiximage3}/>
                </div>
        </div>
    );
};

export default PageSix;