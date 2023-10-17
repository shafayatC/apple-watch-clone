import React from 'react';
import imageSmall from '../../images/4-S.jpg';
import imageMediam from '../../images/4-M.jpg';
import imageLarg from '../../images/4-L.jpg';
import "./style.css"

const PageFifteen = () => {
    return (
        <div className='fifteenPage-bg'>
            <div className='container mx-auto z-10 relative'>
            <div className='pl-40 pt-48'>
                    <p className='font-bold text-white text-[65px]'>GPS far ahead of</p>
                    <p className='font-bold  text-white -mt-5 text-[65px]'>the curve.</p>
                    <p className='font-semibold text-white w-[450px] leading-6 text-[24px]'>GPS performance is critical for athletes who want the most precise metrics. Apple Watch Ultra 2 features a precision dual-frequency GPS system, which makes it the most accurate GPS in a sports watch in dense urban environments.9</p>
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

export default PageFifteen;