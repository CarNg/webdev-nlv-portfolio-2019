import React, {Component} from 'react'
import style from '../ProjectImages/ProjectImages.module.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hopscotch from '../../assets/videos/Hopscotch2.mp4';
import Circuits from '../../assets/videos/Circuits.mp4';
import MediaQuery from 'react-responsive';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export default class ProjectBriefs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    render(){
        const { photoIndex, isOpen } = this.state;

        const settings = {
            dots: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true
        };
    
        const mobileSettings = {
            dots: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            adaptiveHeight: true
        };
    
        let slideshowObject = this.props.projectSlideshow;
        
        var slideshowArray = Object.keys(slideshowObject).map(function(key) {
            return [key, slideshowObject[key]];
        });

        var imagesArray = Object.values(slideshowObject).filter(function(key) {
            return key.endsWith(".jpg");
        });

        const slideshow = slideshowArray.map((slide, index, array) => {
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
                if(array[0][0] === "Video" || array[0][0].includes("YouTube")){
                    return (
                        <img src={slide[1]} alt={slide[0]} key={index} onClick={() => this.setState({ isOpen: true, photoIndex: (index - 1) })} />   
                    )
                }
                else{
                    return (
                        <img src={slide[1]} alt={slide[0]} key={index} onClick={() => this.setState({ isOpen: true, photoIndex: index})} />   
                    )    
                }
                
            }
            return null;
        });

        return (
            <div id={style.wrapper}>
                <div className={style.slides}>
                    <MediaQuery query="(min-device-width: 768px)">
                        <Slider {...settings}>
                            {slideshow}
                        </Slider>
                    </MediaQuery>
        
                    <MediaQuery query="(max-device-width: 767px)">
                        <Slider {...mobileSettings}>
                            {slideshow}
                        </Slider>
                    </MediaQuery>

                    {isOpen && (
                        <Lightbox
                            enableZoom={false}
                            clickOutsideToClose={false}
                            mainSrc={imagesArray[photoIndex]}
                            nextSrc={imagesArray[(photoIndex + 1) % imagesArray.length]}
                            prevSrc={imagesArray[(photoIndex + imagesArray.length - 1) % imagesArray.length]}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + imagesArray.length - 1) % imagesArray.length
                            })
                            }
                            onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % imagesArray.length
                            })
                            }
                        />
                    )}
                </div>
            </div>
        )
    }
}
