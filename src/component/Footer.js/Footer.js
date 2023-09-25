import React from 'react';
import { FaApple } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";

const Footer = () => {
    return (
        <div className='bg-[#F5F5F7] h-[100vh]'>
           <div className='container mx-auto pt-10 '>
               <div className='mx-32'>
                    <div className='flex items-center gap-2 text-[#808083]'>
                    <FaApple className='text-[#6e6e72] hover:text-black cursor-pointer text-[18px]'/>
                    <SlArrowRight className='mt-[2px] text-[#D6D6DB]' />
                    <a className='hover:underline cursor-pointer text-sm'>Watch</a>
                    <SlArrowRight className='mt-[2px] text-[#D6D6DB]'/>
                    <p className='text-sm'>Apple Watch Ultra 2</p>
                    </div>
                    <div className='mt-5 grid grid-cols-5 text-[13px]'>
                    <div className='flex flex-col gap-4 text-[#555558]'>
                       <ul className='flex flex-col gap-2'>
                      <li><p className='font-semibold '>Shop and Learn</p></li>
                      <li><a href='#' target='_blank' className='hover:underline'>Store</a></li>
                      <li><a>Mac</a></li>
                      <li><a>iPad</a></li>
                      <li><a>iPhone</a></li>
                      <li><a>Watch</a></li>
                      <li><a>Vision</a></li>
                      <li><a>AirPods</a></li>
                      <li><a>TV & Home</a></li>
                      <li><a>AirTag</a></li>
                      <li><a>Accessories</a></li>
                      <li><a>Gift Cards</a></li>          
                       </ul>
                       <ul className='flex flex-col gap-2'>
                       <p className='font-semibold'>Apple Wallet</p>
                       <li><a>Wallet</a></li>
                       <li><a>Apple Card</a></li>
                       <li><a>Apple Pay</a></li>
                       <li><a>Apple Cash</a></li>     
                       </ul>
                    </div>
                    <div className='flex flex-col gap-4 text-[#555558]'>
                       <ul className='flex flex-col gap-2'>
                       <p className='font-semibold '>Account</p>
                       <li><a>Manage Your Apple ID</a></li>
                       <li><a>Apple Store Account</a></li>
                       <li><a>iCloud.com</a></li>                   
                       </ul>
                       <ul className='flex flex-col gap-2'>
                       <p className='font-semibold'>Entertainment</p>
                       <li><a>Apple One</a></li>
                       <li><a>Apple TV+</a></li>
                       <li><a>Apple Music</a></li>
                       <li><a>Apple Arcade</a></li>
                       <li><a>Apple Fitness+</a></li>
                       <li><a>Apple News+</a></li>
                       <li><a>Apple Podcasts</a></li>
                       <li><a>Apple Books</a></li>
                       <li><a>App Store</a></li>                       
                       </ul>
                    </div>
                    <div className=' text-[#555558]'>
                       <ul className='flex flex-col gap-2'>
                       <p className='font-semibold '>Apple Store</p>
                       <li><a>Find a Store</a></li>
                       <li><a>Genius Bar</a></li>
                       <li><a>Today at Apple</a></li>
                       <li><a>Apple Camp</a></li>
                       <li><a>Apple Store App</a></li>
                       <li><a>Certified Refurbished</a></li>
                       <li><a>Apple Trade In</a></li>
                       <li><a>Financing</a></li>
                       <li><a>Carrier Deals at Apple</a></li>
                       <li><a>Order Status</a></li>
                       <li><a>Shopping Help</a></li>  
                       </ul>
                      
                    </div>
                    <div className='flex flex-col gap-4 text-[#555558]'>
                       <ul className='flex flex-col gap-2'>
                       <p className='font-semibold '>For Business</p>
                       <li><a>Apple and Business</a></li>
                       <li><a>Shop for Business</a></li>                   
                       </ul>
                       <ul className='flex flex-col gap-2'>
                       <p className='font-semibold '>For Education</p>
                       <li><a>Apple and Education</a></li>
                       <li><a>Shop for K-12</a></li>
                       <li><a>Shop for College</a></li>
                       
                       </ul>
                       <ul className='flex flex-col gap-2'>
                       <p className='font-semibold '>For Healthcare</p>
                       <li><a>Apple in Healthcare</a></li>
                       <li><a>Health on Apple Watch</a></li>
                       <li><a>Health Records on iPhone</a></li>
                       </ul>
                       <ul className='flex flex-col gap-2'>
                       <p className='font-semibold'>For Government</p>
                       <li><a>Shop for Government</a></li>
                       <li><a>Shop for Veterans and Military</a></li>
                                        
                       </ul>
                    </div>
                    <div className='flex flex-col gap-4 text-[#555558]'>
                       <ul className='flex flex-col gap-2'>
                       <p className='font-semibold '>Apple Values</p>
                       <a>Accessibility</a>
                       <a>Education</a>
                       <a>Environment</a>
                       <a>Inclusion and Diversity</a>
                       <a>Privacy</a>
                       <a>Racial Equity and Justice</a>
                       <a>Supplier Responsibility</a>
                       
                       </ul>
                       <ul className='flex flex-col gap-2'>
                       <p className='font-semibold'>About Apple</p>
                       <a>Newsroom</a>
                       <a>Apple Leadership</a>
                       <a>Career Opportunities</a>
                       <a>Investors</a>
                       <a>Ethics & Compliance</a>
                       <a>Events</a>
                       <a>Contact Apple</a>
                       </ul>
                    </div>
                  

                    </div>
                    <p className='mt-8 mb-2 text-[#555558] text-[13px]'>More ways to shop: <span className='text-[#0066CC] underline'>Find an Apple Store</span> or <span className=' text-[#0066CC] underline'>other retailer</span> near you. Or call 1-800-MY-APPLE.</p>
                    <hr></hr>
                    <div className='flex text-[13px] justify-between text-[#555558] mt-2 '>
                        <p>Copyright © 2023 Apple Inc. All rights reserved.</p>
                        <p>Privacy Policy  |  Terms of Use  |  Sales and Refunds  |  Legal  |  Site Map</p>
                        <p>United States</p>
                    </div>
               </div>
            </div> 
        </div>
    );
};

export default Footer;