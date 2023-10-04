import React from 'react';
import mapImg from "../../images/15.png"

const PageSixteen = () => {
    return (
        <div className='bg-black py-40'>
            <div className='container mx-auto'>
            <div className='ml-[600px] pb-40'>
                    <p className='font-bold text-[#F56900] text-[35px]'>Precision dual-</p>
                    <p className='font-bold  text-[#F56900] -mt-5 text-[35px]'>frequency GPS.</p>
                    <p className='font-semibold text-white w-[350px] leading-5 text-[15px]'>Apple Watch Ultra 2 integrates L1 and L5 GPS into an antenna design that provides greater range with incredible power efficiency. It combines data from both frequencies to provide amazingly accurate distance, pace, and route calculations, with a more consistent signal.</p>
                </div>

                <div className='flex justify-center'>
                    <img src={mapImg}/>
                </div>

            </div>
            
        </div>
    );
};

export default PageSixteen;