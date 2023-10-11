import React from 'react';
import "./style.css"
import imgeleven from "../../images/13.jpg"

const PageEleven = () => {
    return (
        <div className='background-page-eleven mb-[820px]'>
            <div className='container mx-auto '>
                <div className='pt-40 pl-40 pb-40'>
                    <p className='text-[28px] font-bold text-white'>Endurance</p>
                    <p className='text-[#F56900] -mt-5 font-bold text-[110px] '>Goes further.</p>
                    <p className='text-[#F56900] -mt-10 font-bold text-[110px] '>So you can, too.</p>
                </div>
                <div className='relative'>
                    <img className='' src={imgeleven}/>
                    <p  className='w-[550px] text-white font-semibold text-[24px] absolute top-[27%] right-[7%]'>Whether it’s your first run in a while, a 10K, or a triathlon, it takes a certain mentality to seek out challenges that test you physically. Apple Watch Ultra 2 is the ultimate training partner, and it’s packed with new features to help you reach your goals.</p>
                    
                </div>
              
            </div>
            
        </div>
    );
};

export default PageEleven;