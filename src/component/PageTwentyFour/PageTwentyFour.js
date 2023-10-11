import React from 'react';
import image26 from "../../images/26.jpg"
import image27 from "../../images/27.2.jpg"

const PageTwentyFour = () => {
    return (
        <div>
            <div className='container mx-auto bg-[#F7F7F7]'>
                <div className='flex justify-center gap-40 mb-10'>
                    <div className='flex flex-col items-center gap-10'>
                        
                            <p className='w-[550px] leading-6 pt-24 text-[#86868B] pb-28 pl-20 font-semibold text-[18px]'><span className='text-black'>Alpine Loop. Tough as trails. </span> Light, durable, and made from two textile layers seamlessly woven into one continuous piece without stitching. The corrosion-resistant titanium G-hook slips smoothly into the reinforced loops for a secure fit. The Alpine Loop contains recycled yarn and is carbon neutral. Available in three stunning new colors.</p>

                            <img src={image26}/>
                        
                    </div>
                    <div >
                        <img src={image27}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageTwentyFour;