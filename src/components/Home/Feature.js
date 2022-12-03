import React from 'react';
import '../Home/Home.css';
const Feature = () => {

    const featureItems =[
        {
            name:"Business Investment",
            des:"Your logo is the very heart of your identity designers deliver the perfect.",
            other:"Read More",
            iconColor:"1",
            icon:"https://radiustheme.com/demo/wordpress/themes/finbuzz/wp-content/uploads/2022/01/shape29.png"
        },
        {
            name:"Business Investment",
            des:"Your logo is the very heart of your identity designers deliver the perfect.",
            other:"Read More",
            iconColor:"2",
            icon:"https://radiustheme.com/demo/wordpress/themes/finbuzz/wp-content/uploads/2022/01/shape29.png"
        },
        {
            name:"Business Investment",
            des:"Your logo is the very heart of your identity designers deliver the perfect.",
            other:"Read More",
            iconColor:"3",
            icon:"https://radiustheme.com/demo/wordpress/themes/finbuzz/wp-content/uploads/2022/01/shape29.png"
        }
    ]

    // console.log(featureItems[1].iconColor=="1"?"pronob"||featureItems[1].iconColor=="2"?"rpy" || featureItems[1].iconColor=="3"?"br" :"kkfkfkf")

    return (
        <div className='feature__section'>
            <div className='feature__parant'>
                {
                    featureItems.map(items =>{
                        return <div className='feature__item'>
                            
                            <img className='feature__img mb-2' src={items.icon} alt="Girl in a jacket" />
                            <h4>{items.name}</h4>
                            <p>{items.des}</p>
                            <a href="https://www.w3schools.com">{items.other}</a>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Feature;