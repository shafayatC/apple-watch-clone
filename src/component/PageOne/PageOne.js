import React from 'react';
import image1 from '../../images/1.2.jpg'
import image2 from '../../images/1.3.jpg'
import image3 from '../../images/16.2.jpg'
import './style.css';

const PageOne = () => {
    return (
        <div className='flex h-full gap-4 img-container my-12'>
            <div >
                <img  className=' max-w-[770px]' src={image2} />
            </div>
            <div className=''>
                <img className='watch-img' src={image3} />
            </div>
            <div >
                <img  className=' max-w-[770px]' src={image1} />
            </div>
        </div>
    );
};

export default PageOne;