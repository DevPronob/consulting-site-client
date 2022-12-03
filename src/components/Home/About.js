import React from 'react';
import '../Home/Home.css';
import { BsCheckCircleFill } from "react-icons/bs";
const About = () => {
    return (
        <div className='px-5'>
            <div className='about__parant'>
                <div className='top__div'>
                <div>
                <img src="https://radiustheme.com/demo/wordpress/themes/finbuzz/wp-content/uploads/2022/01/about1new.jpg" alt="Girl in a jacket" width="570" height="650"/>
                </div>
                <div className='about__content'>
                    <h5>ABOUT US</h5>
                    <h3>We Help Our Clients to Achieve Their Business Goal</h3>
                    <p>Finance can only be as strong as our people our team agenh ave run their businesses.
                        Our agency can only be as stro people our team areafolloe people.</p>

                        <div className='about__feature'>
                            <div>
                            
                            <div className='line__tag'>
                            <img className='about__img' src="https://radiustheme.com/demo/wordpress/themes/finbuzz/wp-content/uploads/2021/10/team9.jpg" alt="Girl in a jacket" width="500" height="600"/>
                            </div>
                            </div>
                            <div>
                                <li><BsCheckCircleFill className='color__orange'/> Business is the best plan</li>
                                <li><BsCheckCircleFill className='color__orange'/> How to improve business</li>
                                <li><BsCheckCircleFill className='color__orange'/> Services we provide</li>
                            </div>
                        </div>

                        <p>Finance can only be as strong as our people our team agenh ave run their businesses.
                            Our agency can only be as stro people our team areafolloe people</p>



                        <div>

                        </div>


                </div>
                </div>
            </div>
        </div>
    );
};

export default About;