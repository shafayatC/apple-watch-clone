/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "./style.css"
import pageEightImg from "../../images/10.png"
import imageSmall from '../../images/2-S.jpg';
import imageMediam from '../../images/2-M.jpg';
import imageLarg from '../../images/2-L.jpg';

const PageEight = () => {
    return (
        <div className='page-eight-bg'>
            <div className='container mx-auto flex flex-col relative z-10 '>
             <div className='absolute top-[530px] left-[160px]'>
             <div>
                    <img src={pageEightImg}/>
                </div>
            <div className=''>
                    <p className='font-bold text-white text-[60px]'>Powered by the</p>
                    <p className='font-bold -mt-8 text-white text-[60px]'>all‑new S9 SiP.</p>
                    <p className='font-semibold text-white w-[560px] text-[20px]'>Custom Apple silicon makes Apple Watch Ultra 2 more capable, easier to use, and faster. The new dual-core CPU has 5.6 billion transistors — 60 percent more than the previous generation. A new four-core Neural Engine processes machine learning tasks up to two times faster. There’s never been anything quite like it in a smartwatch, and it enables advanced new features like on-device Siri, Precision Finding for iPhone, and a magical new way to control your Apple Watch using a simple double tap gesture.</p>
                </div>
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

export default PageEight;