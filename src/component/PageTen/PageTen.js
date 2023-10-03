import React from 'react';
import leaf from '../../images/10.1.png';
import imgTen from '../../images/11.jpg'

const PageTen = () => {
    return (
        <div className=''>
            <div className='container mx-auto'>
                <div className='flex justify-center mt-40 mb-10'>
                    <img src={leaf}/>                 
                </div>

                <div className='flex justify-center'>
                    <img src={imgTen}/>                 
                </div>


                <div className='flex justify-center mt-10 mb-40'>
                    <div className='w-[45%]'>
                        <p className='font-bold text-[60px]'>A first for</p>
                        <p className='font-bold -mt-6 text-[60px]'>Apple Watch.</p>
                        <p className='font-bold -mt-6 text-[60px]'>A major step</p>
                        <p className='font-bold -mt-6 text-[60px]'>toward 2030.</p>
                    </div> 
                    <div className='flex flex-col '>
                        <p className='w-[350px] text-[#86868B] font-semibold text-[24px]'>Through ongoing innovations in materials, clean energy, and low-carbon shipping, Apple Watch is now available in case and band combinations that are carbon neutral.</p>
                        <button className='bg-[#00D959] text-black w-32 mt-6 font-semibold rounded-3xl p-2'>Learn How</button>
                    </div>                
                    <div>
                    </div>                 
                </div>

                

                

            </div>
            
        </div>
    );
};

export default PageTen;