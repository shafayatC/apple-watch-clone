import React from 'react';
import imageSmall from '../../images/8-S.jpg';
import imageMediam from '../../images/8-M.jpg';
import imageLarg from '../../images/8-L.jpg';
import "./style.css"

const PageTwentySeven = () => {
    return (
        <div className='pageTwentySeven-bg'>
            <div className='container mx-auto relative z-10'>
                <div className='pt-40 pl-40 '>
                    <h1 className='text-white text-[60px] font-bold'>A full-featured</h1>
                    <h1 className='text-white text-[60px] -mt-6 font-bold'>dive computer.</h1>
                    <p className='text-white text-[24px] w-[500px] leading-6 font-semibold'>Designed in partnership with renowned underwater innovators Huish Outdoors, the Oceanic+ app for Apple Watch Ultra 2 puts a bona fide dive computer on your wrist.11 Made for recreational snorkeling, scuba diving and freediving down to 40 meters, with all the core features divers need. It’s also refreshingly easy to use.</p>
                </div>
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

export default PageTwentySeven;