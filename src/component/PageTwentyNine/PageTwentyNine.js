import React from 'react';
import image34 from "../../images/34.jpg"
import image35 from "../../images/35.jpg"

const PageTwentyNine = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <div className='bg-black h-[500px] flex justify-center items-center mt-20 gap-20'>
                   

                        <div>
                            <img src={image34}/>
                        </div>
                        <div className=''>
                            <p className='w-[460px] leading-6 text-[#86868B] font-semibold text-[18px]'><span className='text-white'>Safety never stops.</span>All the safety warnings you expect from a dive computer are incorporated into the Oceanic+ app, from decompression limits to excessive ascent rates and safety stops. The app runs a Bühlmann decompression algorithm to constantly calculate and monitor dive parameters, giving you the data you need at a glance.</p>
                       
  
                    </div>
    
                </div>
                <div className='flex justify-center items-center pt-40 gap-20'>

                   
                    <div className=''>
                    <p className='w-[400px] leading-6 text-[#86868B] font-semibold text-[18px]'><span className='text-black'>Post-dive data. From sea to cloud.</span>Get the data from your dive immediately after you surface, including your GPS entry and exit points. It syncs automatically to your iPhone and the cloud. See a summary of your dive profile and check out your scuba or freedive logbook to search through past dives or share your experiences with friends and family.</p>
                    </div>
                    <div>
                        <img src={image35}/>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default PageTwentyNine;