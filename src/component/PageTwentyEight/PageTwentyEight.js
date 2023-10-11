import React from 'react';
import image31 from "../../images/31.jpg"
import image32 from "../../images/32.jpg"
import image33 from "../../images/33.jpg"
import { FiArrowUpRight } from "react-icons/fi";

const PageTwentyEight = () => {
    return (
        <div>
             <div className='container mx-auto py-32'>

                <div className='flex justify-center items-center gap-20'>                 
                    <div>
                        <p className='w-[460px] leading-6 text-[#86868B] font-semibold text-[18px]'><span className='text-black'>Introducing freediving.</span>In addition to the features that make Apple Watch Ultra 2 a full-fledged scuba diving computer, the Oceanic+ app now supports freediving. See critical data like your current depth and descending speed in big, bold, glanceable text. Between dives, Heart Rate Zones help you lower your heart rate, and preset alarms like surface time and elapsed time guide you through each session.</p>
                    </div>
                    <div>
                        <img src={image31}/>
                    </div>
                </div>

                <div className='flex justify-center items-center mt-32 gap-20'>
                    <div>
                        <img src={image32}/>
                    </div>
                    <div >
                        <p className='w-[460px] leading-6 text-[#86868B] font-semibold text-[18px]'><span className='text-black'>A dive planner with local knowledge.</span>Plan your dive using the Oceanic+ app on your iPhone. Integrate local conditions or tap into community feedback. And a new weight-planning feature helps you assess the optimal weight of your diving gear.</p>
                        <div className='flex items-center gap-1 pt-2'>
                            <a className='text-[#0066CC] text-[18px] font-semibold hover:underline' href='#' target='_blank'>Get the Oceanic+ app </a><FiArrowUpRight className='mt-1 text-[#0066CC] text-[20px]'/>
                        </div>
                    </div>                   
                </div>

                <div className='pt-32 pl-40'>
                    <p className='w-[460px] leading-6 text-[#86868B] font-semibold text-[18px]'><span className='text-black'>Metrics that make more sense. </span>Most dive computers require a complex sequence of button pushing to get what you need. The Oceanic+ app lets you access additional screens simply by turning the Digital Crown. It uses color-coding on the big, bright display to make complex information easy to understand.</p>
                </div>
                <div className='flex justify-center pt-16'>
                    <img src={image33}/>
                </div>
            </div>
        </div>
    );
};

export default PageTwentyEight;