import React from 'react'
import style from '../ProjectImages/ProjectImages.module.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProjectImages() {
    const settings = {
        dots: true,
        autoplaySpeed: 5000,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true
     };

    return (
        <div id={style.wrapper}>
            <div className={style.images}>
                <Slider {...settings}>
                    <div>
                        <img src="http://placekitten.com/g/400/200" />
                    </div>
                    <div>
                        <img src="http://placekitten.com/g/400/200" />
                    </div>
                    <div>
                        <img src="http://placekitten.com/g/400/200" />
                    </div>
                    <div>
                        <img src="http://placekitten.com/g/400/200" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}
