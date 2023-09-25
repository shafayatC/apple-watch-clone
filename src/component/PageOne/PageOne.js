import React from 'react';
import image1 from '../../images/1.2.jpg'
import image2 from '../../images/1.3.jpg'
import image3 from '../../images/16.2.jpg'
import './style.css';

const PageOne = () => {
    return (
        <div className='flex h-[150vh] gap-4 mt-12 img-container'>
            <div >
                <img  className='max-w-screen-lg img' src={image2} />
            </div>
            <div>
                <img className='max-w-screen-lg h-[720px] img' src={image3} />
            </div>
            <div >
                <img  className='max-w-screen-lg img' src={image1} />
            </div>
        </div>
    );
};

export default PageOne;