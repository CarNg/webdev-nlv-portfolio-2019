import React from 'react'
import style from './Welcome.module.css';
import {Link} from 'react-router-dom'
import resume from '../../assets/files/CarmenNgResume.pdf'
import MediaQuery from 'react-responsive';
//Images
import socialYoutube from '../../assets/images/socialYoutube.png';
import socialLinkedIn from '../../assets/images/socialLinkedIn.png';
import socialSociety6 from '../../assets/images/socialSociety6.png';
import socialItch from '../../assets/images/socialItch.png';
import socialGithub from '../../assets/images/socialGithub.png'

export default function Welcome() {
    //Temp mobile css
    const mobileTitle = {
        fontSize: "4.5rem",
        borderTop: "3px solid var(--nlv-cyan)",
        borderBottom: "3px solid var(--nlv-cyan)",
    }

    const mobileSubtitle = {
        marginTop: "20px",
        fontSize: "1.3rem"
    }

    const socialRow = {
        width: "100%",
        display: "table",
        tableLayout: "fixed"
    }

    const socialIcon = {
        width: "40px",
        height: "40px",
        padding: "10px"
    }

    const socialColumn = {
        display: "table-cell"
    }

    return (
        <div className={style.welcomeWrapper}>
            <MediaQuery query="(min-device-width: 768px)">
                    <h1>Carmen Ng</h1>
                    <h3 style={{paddingRight: "80px"}}>Web Developer<span style={{color: "var(--nlv-red)", fontSize: "4rem"}}>/</span>Game Designer</h3>
                    <h5>Originally based in Ireland, now based in Hong Kong. Orginally a web designer, now a web developer.</h5>
                    <div id={style.buttonsWrapper}>
                        <a href={resume} target="_blank" rel="noopener noreferrer">
                            <div className={[style.button, "button"].join(' ')} style={{marginLeft: "0px"}}>
                                view resume
                            </div>
                        </a>
                        <Link to="/projects">
                            <div className={[style.button, "button"].join(' ')}>
                                view projects
                            </div>
                        </Link>
                    </div>
            </MediaQuery>
            <MediaQuery query="(max-device-width: 767px)">
                    <div style={mobileTitle}>STAY TUNED</div>
                    <div style={mobileSubtitle}>
                        Mobile site is coming very soon!
                        <br/><br/><br/>
                        For now, check out the desktop site 
                        <br/> or follow along:
                    </div>
                    <div style={socialRow}>
                        <a href="https://github.com/CarNg/" style={socialColumn}>
                            <div style={socialIcon}>
                                <img
                                    alt="Github Icon"
                                    src={socialGithub} 
                                    width="100%"
                                />
                            </div>
                        </a>
                        <a href="https://nightlightvisuals.itch.io/" style={socialColumn}>
                            <div style={socialIcon}>
                                    <img
                                        alt="Itch.io Icon"
                                        src={socialItch} 
                                        width="100%"
                                    />
                            </div>
                        </a>  
                        <a href="https://www.linkedin.com/in/carng" style={socialColumn}>
                            <div style={socialIcon}>
                                <img
                                    alt="LinkedIn Icon"
                                    src={socialLinkedIn} 
                                    width="100%"
                                />
                            </div>
                        </a>
                        <a href="https://www.youtube.com/channel/UCVcdn5DAeuBsahRK4Gk5XmA" style={socialColumn}>
                            <div style={socialIcon}>
                                <img
                                    alt="Youtube Icon"
                                    src={socialYoutube} 
                                    width="100%"
                                />  
                            </div>
                        </a>
                        <a href="https://society6.com/carmenng" style={socialColumn}>
                            <div style={socialIcon}>
                                <img
                                    alt="Society6 Icon"
                                    src={socialSociety6} 
                                    width="100%"
                                />
                            </div>
                        </a>
                    </div> 
            </MediaQuery>
        </div>
    )
}
