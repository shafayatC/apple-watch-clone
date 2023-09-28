import React from 'react';
import page3image from '../../images/3.3.png'
import "./style.css";

const PageThree = () => {
    return (
        <div >
            <div className='container mx-auto'>
                <div>
                    <p className='font-semibold ml-2 text-2xl'>Design</p>
                    <p className='font-bold -mt-6 text-[120px]'>New guts.</p>
                    <p className='font-bold -mt-16 text-[120px]'>More glory.</p>
                </div>
            </div>
            <div className='img-container-page3 mt-20 ml-[-10%]'>
                <img className='watch-page3-img' src={page3image}/>
            </div>
        </div>
    );
};

export default PageThree;