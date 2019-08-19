import React, {Component} from 'react'
import resume from '../assets/files/CarmenNgResume.pdf'
import {Link} from 'react-router-dom'
//Components
import Profile from '../components/Profile/Profile';
import Skills from '../components/Skills/Skills';
import Loading from '../components/Loading/Loading';

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            imageLoaded : false
        }
        this.imageLoadedHandler = this.imageLoadedHandler.bind(this);
    }

    imageLoadedHandler() {
        this.setState({ 
            imageLoaded : true
        });
    }

    render(){
        return (

            <React.Fragment>
                <Loading loadingText="Making myself presentable" hideShow={this.state.imageLoaded === false ? "" : "hide"}/>
                <div className={`pageWrapper ${this.state.imageLoaded ? "show" : "hide"}`}>
                    <div style={{position: "absolute", top: "50%", transform: "translateY(-50%)"}}>
                        <Profile onImageLoad={this.imageLoadedHandler}/>
                        <Skills/>
                        <div style={buttonWrapper}>
                            <a href={resume} target="_blank" rel="noopener noreferrer">
                                <div style={button} className="button">
                                    view resume
                                </div>
                            </a>
                            <Link to="/contact">
                                <div style={button} className="button">
                                    let's talk
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const button = {
    padding: "0.7rem 0.5rem 0.5rem 0.6rem",
    margin: "0px 10px 0px 10px",
    fontSize: "1.1em",
    fontWeight: "500",
    letterSpacing: "0.15em",
    height: "22.5px",
    width: "113px"
}

const buttonWrapper = {
    width: "100%",
    textAlign: "center",
    display: "inline-block"
}