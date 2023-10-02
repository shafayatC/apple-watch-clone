import React from 'react';
import { FaApple } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";

const Footer = () => {
    return (
        <div className='bg-[#F5F5F7] h-full '>
           <div className='container mx-auto pt-10 pb-10'>
               <div className=''>
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
                      <li><a href='#' target='_blank' className='hover:underline'>Mac</a></li>
                      <li><a href='#' target='_blank' className='hover:underline'>iPad</a></li>
                      <li><a href='#' target='_blank' className='hover:underline'>iPhone</a></li>
                      <li><a href='#' target='_blank' className='hover:underline'>Watch</a></li>
                      <li><a href='#' target='_blank' className='hover:underline'>Vision</a></li>
                      <li><a href='#' target='_blank' className='hover:underline'>AirPods</a></li>
                      <li><a href='#' target='_blank' className='hover:underline'>TV & Home</a></li>
                      <li><a href='#' target='_blank' className='hover:underline'>AirTag</a></li>
                      <li><a href='#' target='_blank' className='hover:underline'>Accessories</a></li>
                      <li><a href='#' target='_blank' className='hover:underline'>Gift Cards</a></li>          
                       </ul>
                       <ul className='flex flex-col gap-2'>
                       <p className='font-semibold'>Apple Wallet</p>
                       <li><a href='#' target='_blank' className='hover:underline'>Wallet</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Apple Card</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Apple Pay</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Apple Cash</a></li>     
                       </ul>
                    </div>
                    <div className='flex flex-col gap-4 text-[#555558]'>
                       <ul className='flex flex-col gap-2'>
                       <p className='font-semibold '>Account</p>
                       <li><a href='#' target='_blank' className='hover:underline'>Manage Your Apple ID</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Apple Store Account</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>iCloud.com</a></li>                   
                       </ul>
                       <ul className='flex flex-col gap-2'>
                       <p className='font-semibold'>Entertainment</p>
                       <li><a href='#' target='_blank' className='hover:underline'>Apple One</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Apple TV+</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Apple Music</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Apple Arcade</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Apple Fitness+</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Apple News+</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Apple Podcasts</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Apple Books</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>App Store</a></li>                       
                       </ul>
                    </div>
                    <div className=' text-[#555558]'>
                       <ul className='flex flex-col gap-2'>
                       <p className='font-semibold '>Apple Store</p>
                       <li><a href='#' target='_blank' className='hover:underline'>Find a Store</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Genius Bar</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Today at Apple</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Apple Camp</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Apple Store App</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Certified Refurbished</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Apple Trade In</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Financing</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Carrier Deals at Apple</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Order Status</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Shopping Help</a></li>  
                       </ul>
                      
                    </div>
                    <div className='flex flex-col gap-4 text-[#555558]'>
                       <ul className='flex flex-col gap-2'>
                       <p className='font-semibold '>For Business</p>
                       <li><a href='#' target='_blank' className='hover:underline'>Apple and Business</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Shop for Business</a></li>                   
                       </ul>
                       <ul className='flex flex-col gap-2'>
                       <p className='font-semibold '>For Education</p>
                       <li><a href='#' target='_blank' className='hover:underline'>Apple and Education</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Shop for K-12</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Shop for College</a></li>
                       
                       </ul>
                       <ul className='flex flex-col gap-2'>
                       <p className='font-semibold '>For Healthcare</p>
                       <li><a href='#' target='_blank' className='hover:underline'>Apple in Healthcare</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Health on Apple Watch</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Health Records on iPhone</a></li>
                       </ul>
                       <ul className='flex flex-col gap-2'>
                       <p className='font-semibold'>For Government</p>
                       <li><a href='#' target='_blank' className='hover:underline'>Shop for Government</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Shop for Veterans and Military</a></li>
                                        
                       </ul>
                    </div>
                    <div className='flex flex-col gap-4 text-[#555558]'>
                       <ul className='flex flex-col gap-2'>
                       <p className='font-semibold '>Apple Values</p>
                       <li><a href='#' target='_blank' className='hover:underline'>Accessibility</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Education</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Environment</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Inclusion and Diversity</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Privacy</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Racial Equity and Justice</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Supplier Responsibility</a></li>     
                       </ul>
                       <ul className='flex flex-col gap-2'>
                       <p className='font-semibold'>About Apple</p>
                       <li><a href='#' target='_blank' className='hover:underline'>Newsroom</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Apple Leadership</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Career Opportunities</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Investors</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Ethics & Compliance</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Events</a></li>
                       <li><a href='#' target='_blank' className='hover:underline'>Contact Apple</a></li>
                                 
                       </ul>
                    </div>
                  

                    </div>
                    <p className='mt-8 mb-2 text-[#555558] text-[13px]'>More ways to shop: <a className='text-[#0066CC] underline cursor-pointer'>Find an Apple Store</a> or <a className=' text-[#0066CC] underline cursor-pointer'>other retailer</a> near you. Or call 1-800-MY-APPLE.</p>
                    <hr></hr>
                    <div className='flex text-[13px] justify-between text-[#555558] mt-2 '>
                        <p>Copyright © 2023 Apple Inc. All rights reserved.</p>
                        <p className=''><a href='#' target='_blank' className='hover:underline'>Privacy Policy</a>  |  <a href='#' target='_blank' className='hover:underline'>Terms of Use</a>  | <a href='#' target='_blank' className='hover:underline'>Sales and Refunds</a>   | <a href='#' target='_blank' className='hover:underline'>Legal</a>   | <a href='#' target='_blank' className='hover:underline'>Site Map</a> </p>
                        <a href='#' target='_blank' className='hover:underline'>United States</a>
                    </div>
               </div>
            </div> 
        </div>
    );
};

export default Footer;