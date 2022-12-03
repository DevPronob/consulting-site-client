import React from 'react';
import { BsFillPlayFill } from "react-icons/bs";
import '../Home/Home.css';
const Banner = () => {
    return (
        <div className='banner__parant'>
            <div className='banner_text'>
               <h4 className='banner__title'>WE CREAT DIGITAL PRODUCT</h4>
               <h3>Provide Massive Business Solutions</h3>
               <p>Business contents insurance is type of business insurance ossessions and equipment</p>
               <div className='bottom__banner'>
               <button className='banner__btn' type="button">GET STARTED NOW</button>
               <span className='vedio__icon'><BsFillPlayFill/></span>
               <span> Watch The Video </span>
               </div>
            </div>
        </div>
    );
};

export default Banner;