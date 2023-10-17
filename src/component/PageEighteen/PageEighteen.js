import React from 'react';
import imageSmall from '../../images/5-S.jpg';
import imageMediam from '../../images/5-M.jpg';
import imageLarg from '../../images/5-L.jpg';
import "./style.css"

const PageEighteen = () => {
    return (
        <div className='background-page-18th'>
            <div className='pt-40 pl-40 z-10 relative'>
                <p className='text-white font-bold text-3xl'>Adventure</p>
                <p className='text-[#F56900] text-[110px] font-bold'>Peak performance.</p>
                <p className='text-[#F56900] -mt-12 text-[110px] font-bold'>Pushed.</p>
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

export default PageEighteen;