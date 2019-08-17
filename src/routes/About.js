import React from 'react'
import resume from '../assets/files/CarmenNgResume.pdf'
import {Link} from 'react-router-dom'
//Components
import Profile from '../components/Profile/Profile';
import Skills from '../components/Skills/Skills';

export default function About() {
    return (
        <div className="pageWrapper">
            <div style={{position: "absolute", top: "50%", transform: "translateY(-50%)"}}>
                <Profile/>
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
    )
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