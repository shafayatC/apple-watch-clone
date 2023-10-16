import React from 'react';
import "./style.css"
import imgeleven from "../../images/13.jpg"
import imageSmall from '../../images/3-S.jpg';
import imageMediam from '../../images/3-M.jpg';
import imageLarg from '../../images/3-L.jpg';
import imageSmall2 from '../../images/3.1-S.jpg';
import imageMediam2 from '../../images/3.1-M.jpg';
import imageLarg2 from '../../images/3.1-L.jpg';

const PageEleven = () => {
    return (
        <div className='background-page-eleven'>
            <div className='container mx-auto z-10 relative'>
                <div className='pt-40 pl-40 pb-40'>
                    <p className='text-[28px] font-bold text-white'>Endurance</p>
                    <p className='text-[#F56900] -mt-5 font-bold text-[110px] '>Goes further.</p>
                    <p className='text-[#F56900] -mt-10 font-bold text-[110px] '>So you can, too.</p>
                </div>
                
               
                <div className='relative'>
                <picture className='image-fill-wrapper2'>
                    <source srcSet={imageSmall2} media="(max-width:734px)" />
                    <source srcSet={imageMediam2} media="(max-width:1068px)" />
                    <source srcSet={imageLarg2} media="(min-width:0px)" />
                    <img src={imageLarg2} alt="" />
                </picture>
                   <p  className='w-[550px] text-white font-semibold text-[24px] absolute top-[720px] right-[7%]'>Whether it’s your first run in a while, a 10K, or a triathlon, it takes a certain mentality to seek out challenges that test you physically. Apple Watch Ultra 2 is the ultimate training partner, and it’s packed with new features to help you reach your goals.</p>
                   
               </div>
            </div>
            <picture className='image-fill-wrapper'>
                <source srcSet={imageSmall} media="(max-width:734px)" />
                <source srcSet={imageMediam} media="(max-width:1068px)" />
                <source srcSet={imageLarg} media="(min-width:0px)" />
                <img src={imageLarg} alt="" />
            </picture>
        </div>
    );
};

export default PageEleven;