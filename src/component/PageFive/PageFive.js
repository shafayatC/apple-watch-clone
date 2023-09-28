import React from 'react';
import imagePage5 from "../../images/5.jpg"

const PageFive = () => {
    return (
        <div className='bg-[#F7F7F7]'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    <div>
                        <img className='max-w-[700px] -ml-10' src={imagePage5}/>
                    </div>

                    <div>
                        <p className='w-[400px] mr-24 text-[#86868B] font-semibold text-[19px]'><span className='text-black'>The biggest and brightest Apple Watch display ever.</span> Powered by the all-new S9 SiP, the Always‑On Retina display is 3000 nits at its peak, making it even more readable in harsh sunlight. In low-light situations, it dims to 1 nit. Night Mode now activates automatically in the dark. The large display gives you room to customize your view to suit almost any activity. And a new watch face shows dynamic info like altitude, depth, or seconds along the outermost edges.</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default PageFive;