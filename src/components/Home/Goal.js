import React from 'react';
import '../Home/Home.css';
import pp from '../../images/ez.png'
const Goal = () => {
    return (
        <div className='goal__section'>
            <div className='goal__inner'>
                <div>
                    <h3>Request a Schedule For Free Consultation</h3>
                </div>
                <button className='goal__btn' type="button">REQUEST A SCHEDUEL</button>
            </div>



            <div className='goal__next__section'>
                <div className='goal__next__images'>
                <img className='about__img' src="https://radiustheme.com/demo/wordpress/themes/finbuzz/wp-content/uploads/2022/01/blog12.jpg" alt="Girl in a jacket" />
                <img className='goal__next__sideImage' src="https://radiustheme.com/demo/wordpress/themes/finbuzz/wp-content/uploads/2022/01/blog13.jpg" alt="Girl in a jacket" />
                </div>
                <div className='goal__next__body'>
                    <h5>OUR MAIN GOAL</h5>
                    <h3>Creating a Business with Authentic Integrity</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipissed do eius mod tempor incididunt ut laboret amet, Lorem ipsum amet, consectetur adipiscing se dolor sit amet</p>
                    <div className='rtr__parant'>
                        <div className='rtr__img'>
                        <img className='' src="https://radiustheme.com/demo/wordpress/themes/finbuzz/wp-content/uploads/2022/01/Icon_01.png" alt="Girl in a jacket" /> 
                        </div>
                        <div className='rtr__body'>
                            <h4>Strategic vision</h4>
                            <p>Dorem ipsum dolor sit amet, consectetu mod tempor incididunt.</p>
                        </div>
                    </div>
                    <div className='rtr__parant'>
                        <div className='rtr__img'>
                        <img className='' src="https://radiustheme.com/demo/wordpress/themes/finbuzz/wp-content/uploads/2022/01/Icon_01.png" alt="Girl in a jacket" /> 
                        </div>
                        <div className='rtr__body'>
                            <h4>Strategic vision</h4>
                            <p>Dorem ipsum dolor sit amet, consectetu mod tempor incididunt.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Goal;