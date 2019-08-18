import React from 'react'
import style from '../ProjectImages/ProjectImages.module.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProjectImages(props) {
    const settings = {
        dots: true,
        autoplaySpeed: 5000,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true
    };

    let imageObject = props.projectImages;
    
    var imageArray = Object.keys(imageObject).map(function(key) {
        return [key, imageObject[key]];
    });

    const slideshow = imageArray.map((image, index) => {
        return (
            <img src={image[1]} alt={image[0]} key={index}/>                
        )
    });    

    return (
        <div id={style.wrapper}>
            <div className={style.images}>
                <Slider {...settings}>
                    {slideshow}
                </Slider>
            </div>
        </div>
    )
}
