import React from 'react'
import style from '../ContactInfo/ContactInfo.module.css'
//Images
import socialYoutube from '../../assets/images/socialYoutube.png';
import socialLinkedIn from '../../assets/images/socialLinkedIn.png';
import socialSociety6 from '../../assets/images/socialSociety6.png';
import socialItch from '../../assets/images/socialItch.png';
import socialGithub from '../../assets/images/socialGithub.png'

export default function ContactInfo() {
    return (
        <div className={style.wrapper}>
            <p id={style.title}>Got a question? Get in touch!</p>

            <div className={style.emailRow}>
                Shoot me an email at <br/>    
                <a href="mailto:carmenng.media@gmail.com?Subject=Night%20Light%20Visuals" id={style.email}>
                    carmenng.media@gmail.com
                </a> <br/>
            </div>

            <hr id={style.line}/>

            <div className={style.socialRow}>
                Follow along at <br/>    

                <a href="https://github.com/CarNg/">
                    <div className={style.socialIcon}>
                        <img
                            alt="Github Icon"
                            src={socialGithub}
                        />
                    </div>
                </a>
                <a href="https://nightlightvisuals.itch.io/">
                    <div className={style.socialIcon}>
                            <img
                                alt="Itch.io Icon"
                                src={socialItch}
                            />
                    </div>
                </a>  
                <a href="https://www.linkedin.com/in/carng">
                    <div className={style.socialIcon}>
                        <img
                            alt="LinkedIn Icon"
                            src={socialLinkedIn}
                        />
                    </div>
                </a>
                <a href="https://www.youtube.com/channel/UCVcdn5DAeuBsahRK4Gk5XmA">
                    <div className={style.socialIcon}>
                        <img
                            alt="Youtube Icon"
                            src={socialYoutube}
                        />  
                    </div>
                </a>
                <a href="https://society6.com/carmenng">
                    <div className={style.socialIcon}>
                        <img
                            alt="Society6 Icon"
                            src={socialSociety6}
                        />
                    </div>
                </a>
            </div>
        </div>
    )
}
