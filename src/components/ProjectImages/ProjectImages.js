import React from 'react'
import style from '../ProjectImages/ProjectImages.module.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hopscotch from '../../assets/videos/Hopscotch2.mp4';
import Circuits from '../../assets/videos/Circuits.mp4';


export default function ProjectImages(props) {
    const settings = {
        dots: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        centerMode: true
    };

    let slideshowObject = props.projectSlideshow;
    
    var slideshowArray = Object.keys(slideshowObject).map(function(key) {
        return [key, slideshowObject[key]];
    });

    const slideshow = slideshowArray.map((slide, index) => {
        if(slide[0] === "Video"){
            if(slide[1] === "Hopscotch2"){
                return (
                    <div className={style.videoWrapper} key={index}>
                        <video width="400" controls key={index}>
                            <source src={Hopscotch} type="video/mp4" />
                            Your browser does not support HTML5 video.
                        </video>
                    </div>
                )
            }
            else if(slide[1] === "Circuits"){
                return (
                    <div className={style.videoWrapper} key={index}>
                        <video width="400" controls key={index}>
                            <source src={Circuits} type="video/mp4" />
                            Your browser does not support HTML5 video.
                        </video>
                    </div>
                )
            }            
        }
        else if(slide[0].includes("YouTube")){
            return (
                <div className={style.videoWrapper} key={index}>
                    <iframe width="700" height="394" src={slide[1]} frameBorder="0" allowFullScreen title={slide[0]}></iframe>
                </div>
            )
        }
        else{
            return (
                <img src={slide[1]} alt={slide[0]} key={index}/>                
            )
        }
        return null;
    });    

    return (
        <div id={style.wrapper}>
            <div className={style.slides}>
                <Slider {...settings}>
                    {slideshow}
                </Slider>
            </div>
        </div>
    )
}
