import React from 'react';
import img1 from "../../images/2.png"
import { FaAngleRight} from "react-icons/fa";

const PageTwo = () => {
    return (
        <div className='my-40'>
            <div className='container mx-auto'>
                <div>
                    <div className='flex justify-center'>
                        <img src={img1}/>
                    </div>
                    <div className='text-center flex flex-col items-center '>
                        <h1 className='text-7xl font-extrabold py-8'>Next level adventure.</h1>
                        <p className='text-[#86868B] text-2xl pb-8 font-semibold flex justify-center w-[670px]'>The most rugged and capable Apple Watch pushes the limits again. Featuring the all-new S9 SiP. A magical new way to use your watch without touching the screen. The brightest Apple display ever. And now you can choose a case and band combination that is carbon neutral.</p>

                        <a href='#' className='text-3xl flex items-center font-semibold hover:underline'>Watch the event <FaAngleRight className='mt-2'/></a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PageTwo;