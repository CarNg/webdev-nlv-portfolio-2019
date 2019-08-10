import React from 'react'
import style from '../References/References.module.css';
import referenceList from '../../assets/data/References.json';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function References() {
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
     };

    const references = referenceList.map((reference) =>
        (
            <div key={reference.id}>
                <div className={style.referenceImage}></div>
                <span className={style.quote}>{reference.quote}</span>
                <br/><br/>
                <span><b>{reference.person}</b> <span style={{color: "var(--nlv-cyan)"}}><i>{reference.position}</i></span></span>
            </div>
        )
    );    

    return (
        <div id={style.wrapper}>
            <div className={style.reference}>
                <Slider {...settings}>
                    {references}
                </Slider>
            </div>
        </div>
    )
}
