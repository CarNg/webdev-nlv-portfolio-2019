import React from 'react'
import style from '../ContactInfo/ContactInfo.module.css'
//Images
import socialEmail from '../../assets/images/socialEmail.png';
import socialYoutube from '../../assets/images/socialYoutube.png';
import socialLinkedIn from '../../assets/images/socialLinkedIn.png';
import socialSociety6 from '../../assets/images/socialSociety6.png';
import socialItch from '../../assets/images/socialItch.png';
import socialGithub from '../../assets/images/socialGithub.png'



export default function ContactInfo() {
    return (
        <div className={style.wrapper}>
            <div className={style.socialRow}>
                <a href="mailto:carmenng.media@gmail.com">
                    <div className={style.emailRow}>
                        <img
                            alt="Email Icon"
                            src={socialEmail}
                            width="40"
                            height="40"
                            style={{verticalAlign: "middle", marginRight: "10px"}}
                        />
                        carmenng.media@gmail.com
                    </div>
                </a>
            </div>
            <div className={style.socialRow}>
                <div className={style.socialIcon}>
                    <a href="https://www.linkedin.com/in/carng">
                        <img
                            alt="LinkedIn Icon"
                            src={socialLinkedIn}
                        />
                    </a>
                </div>
                <div className={style.socialIcon}>
                    <a href="https://www.youtube.com/channel/UCVcdn5DAeuBsahRK4Gk5XmA">
                        <img
                            alt="Youtube Icon"
                            src={socialYoutube}
                        />
                    </a>
                </div>
                <div className={style.socialIcon}>
                    <a href="https://github.com/CarNg/">
                        <img
                            alt="Github Icon"
                            src={socialGithub}
                        />
                    </a>
                </div>
           
                <div className={style.socialIcon}>
                    <a href="https://society6.com/carmenng">
                        <img
                            alt="Society6 Icon"
                            src={socialSociety6}
                        />
                    </a>
                </div>
                    
                <div className={style.socialIcon}>
                    <a href="https://nightlightvisuals.itch.io/">
                        <img
                            alt="Itch.io Icon"
                            src={socialItch}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}
