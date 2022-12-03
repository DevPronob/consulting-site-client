import React from 'react';
import '../Home/Home.css';
import pp from '../../images/ez.png'
const Work = () => {
    const workitem =[
        {
            name:"Business Audit",
            dec:"Investment Planning Working with thousands of business companies around",
            img:"https://s4.aconvert.com/convert/p3r68-cdx67/a1z5c-4qplx.png",
            mainImg:"https://radiustheme.com/demo/wordpress/themes/finbuzz/wp-content/uploads/2021/10/img_5-570x447.jpg"
        },
        {
            name:"Business Audit",
            dec:"Investment Planning Working with thousands of business companies around",
            img:"https://s4.aconvert.com/convert/p3r68-cdx67/a1z5c-4qplx.png",
            mainImg:"https://radiustheme.com/demo/wordpress/themes/finbuzz/wp-content/uploads/2021/10/img_5-570x447.jpg"
        },
        {
            name:"Business Audit",
            dec:"Investment Planning Working with thousands of business companies around",
            img:"https://s4.aconvert.com/convert/p3r68-cdx67/a1z5c-4qplx.png",
            mainImg:"https://radiustheme.com/demo/wordpress/themes/finbuzz/wp-content/uploads/2021/10/img_5-570x447.jpg"
        }
    ]
    return (
        <div className='work__section'>
            <div className='work__content'>
                <div>
                    <h5 className='work__title'>WHAT WE DO</h5>
                    <h3>What Services we Provide for Our Customers Business</h3>
                </div>
                <div>
                    <p>Our agency can only be as strong as our people our team follwing agenhave run their businesses designed.</p>
                </div>
            </div>


            <div className='work__warp pt-4'>
                {
                    workitem.map(items =>{
                        return <div className='fe__body'>
                            
                            <img className=' fe__img mb-2' src={items.mainImg} alt="Girl in a jacket" />
                            
                            <div >
                            <img className='work__img mb-2' src={pp} alt="Girl in a jacket" />
                            <h5>{items.name}</h5>
                            <p>{items.dec}</p>
                            <a href="https://www.w3schools.com">Read More</a>
                            </div>
                        </div>
                    })
                }
                
            </div>

            <p className='text-center py-5'>You Can Also See All Business Services</p>
        </div>
    );
};

export default Work;