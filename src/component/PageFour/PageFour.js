import React from 'react';
import "./style.css"
import imageSmall from '../../images/design_tough__cxf55rbuc4q6_small_2x.jpg';
import imageMediam from '../../images/design_tough__cxf55rbuc4q6_medium.jpg';
import imageLarg from '../../images/design_tough__cxf55rbuc4q6_large.jpg';

const PageFour = () => {
    return (
        <div className='background-page-four'>
            <div className='container mx-auto z-10 relative'>
                <div className='pt-20'>
                    <p className='font-bold text-[60px]'>Looks tough.</p>
                    <p className='font-bold -mt-8  text-[60px]'>Because it is.</p>
                    <p className='font-semibold text-[#86868B] w-[520px] text-[26px]'>Apple Watch Ultra 2 is crafted for unparalleled performance. The lightweight titanium case is rugged and corrosion resistant, and it's raised to protect the sapphire crystal from edge impacts.</p>
                </div>
                <div>
                    <p className='font-bold mt-20 text-[#F56900] line-height w-[360px] text-[30px]'>49mm titanium case Water resistance 100m* Tested to MIL-STD 810H1 IP6X dust resistance2</p>
                </div>
            </div>
            <picture className='image-fill-wrapper'>
                <source srcSet={imageSmall} media="(max-width:734px)" />
                <source srcSet={imageMediam} media="(max-width:1068px)" />
                <source srcSet={imageLarg} media="(min-width:0px)" />
                <img src={imageLarg} alt="" />
            </picture>
            {/* <img src={imageSmall}/> */}
        </div>
    );
};

export default PageFour;