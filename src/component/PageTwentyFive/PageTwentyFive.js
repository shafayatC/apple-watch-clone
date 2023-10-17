import React from 'react';
import imageSmall from '../../images/7-S.jpg';
import imageMediam from '../../images/7-M.jpg';
import imageLarg from '../../images/7-L.jpg';
import "./style.css"
const PageTwentyFive = () => {
    return (
        <div className='background-page-25 relative'>
            <div className='pt-40 pl-40 relative z-10'>
                <p className='text-white font-bold text-3xl'>Ocean</p>
                <p className='text-[#F56900] text-[110px] font-bold'>Ground­breaking,</p>
                <p className='text-[#F56900] -mt-12 text-[110px] font-bold'>even in the sea.</p>
            </div>
            <picture className='image-fill-wrappers'>
                <source srcSet={imageSmall} media="(max-width:734px)" />
                <source srcSet={imageMediam} media="(max-width:1068px)" />
                <source srcSet={imageLarg} media="(min-width:0px)" />
                <img src={imageLarg} alt="" />
            </picture>
        </div>
    );
};

export default PageTwentyFive;