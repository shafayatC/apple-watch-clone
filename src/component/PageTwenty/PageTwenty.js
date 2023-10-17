import React from 'react';
import "./style.css"
import imageSmall from '../../images/6-S.jpg';
import imageMediam from '../../images/6-M.jpg';
import imageLarg from '../../images/6-L.jpg';
const PageTwenty = () => {
    return (
        <div className='twentyPage-bg'>
            <div className='container mx-auto relative z-10'>
                <div className='flex justify-center items-center h-[120vh] pl-96 pt-28'>
                    <p className='w-[400px] leading-6 text-[#86868B] font-semibold text-[18px]'><span className='text-white'>Views you can use.</span>See critical details like elevation, incline, longitude, and latitude on the giant display. Use double tap to easily add waypoints. Get a three-dimensional view of your waypoints by tapping the elevation button. Drop a waypoint on a trailhead, campsite, or point of interest. And now see the last place you had reception on your route with automatically generated cellular connectivity waypoints.</p>
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

export default PageTwenty;