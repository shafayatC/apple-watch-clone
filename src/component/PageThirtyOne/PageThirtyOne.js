import React from 'react';
import image37 from "../../images/37.jpg"
import image38 from "../../images/38.1.jpg"

const PageThirtyOne = () => {
    return (
        <div>
             <div className='container mt-20 mx-auto bg-[#F7F7F7]'>
                <div className='flex justify-center gap-40 mb-10'>
                    <div className='flex flex-col items-center gap-10'>
                        
                            <p className='w-[550px] leading-6 pt-24 text-[#86868B] pb-28 pl-20 font-semibold text-[18px]'><span className='text-black'>Ocean Band. The sea is calling.  </span> Molded from a high-performance elastomer, it’s flexible and stretchy. The corrosion‑resistant titanium buckle and spring‑loaded titanium adjustable loop secure the band, even during high-speed water sports. Available in three colors, including two vibrant new options.</p>

                            <img src={image37}/>
                        
                    </div>
                    <div >
                        <img src={image38}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageThirtyOne;