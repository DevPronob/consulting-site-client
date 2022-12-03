import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import '../Home/Home.css';
import { Pagination } from "swiper";
const Case = () => {
    const images =[
        "https://radiustheme.com/demo/wordpress/themes/finbuzz/wp-content/uploads/2021/10/portfolio7-551x700.jpg",
        "https://radiustheme.com/demo/wordpress/themes/finbuzz/wp-content/uploads/2021/10/f-551x700.jpg",
        "https://radiustheme.com/demo/wordpress/themes/finbuzz/wp-content/uploads/2021/10/portfolio10-551x700.jpg",
        "https://radiustheme.com/demo/wordpress/themes/finbuzz/wp-content/uploads/2021/10/img_6-551x700.jpg",
        "https://radiustheme.com/demo/wordpress/themes/finbuzz/wp-content/uploads/2021/10/img_8-551x700.jpg",
        "https://radiustheme.com/demo/wordpress/themes/finbuzz/wp-content/uploads/2021/10/img_6-551x700.jpg",
        "https://radiustheme.com/demo/wordpress/themes/finbuzz/wp-content/uploads/2021/10/img_4-551x700.jpg",
        "https://radiustheme.com/demo/wordpress/themes/finbuzz/wp-content/uploads/2021/10/portfolio12-551x700.jpg"
    ]
  
    return (
        <div className='case__section'>
            <div className='work__content'>
                <div>
                    <h5 className='work__title'>WHAT WE DO</h5>
                    <h3>What Services we Provide for Our Customers Business</h3>
                </div>
                <div>
                    <p>Our agency can only be as strong as our people our team follwing agenhave run their businesses designed.</p>
                </div>
            </div>

            <div className='case__next__section pt-4'>
            <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
            images.map(items =>{
                return <SwiperSlide><img src={items} alt="Girl in a jacket" width="500" height="600"/></SwiperSlide>
            })
        }
      </Swiper>
    </>
            </div>
           
        </div>
    );
};

export default Case;