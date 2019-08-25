import React from 'react'
import style from './Welcome.module.css';
import {Link} from 'react-router-dom'
import resume from '../../assets/files/CarmenNgResume.pdf'
import MediaQuery from 'react-responsive';

export default function Welcome() {
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
                <h1>Carmen Ng</h1>
                <h3 style={{paddingRight: "30px"}}>Web Developer<span style={{color: "var(--nlv-red)"}}>/</span>Game Designer</h3>
                <h5>Originally based in Ireland, now based in Hong Kong. <br/> Orginally a web designer, now a web developer.</h5>
                <div id={style.buttonsWrapper}>
                    <a href="mailto:carmenng.media@gmail.com?Subject=Night%20Light%20Visuals">
                        <div className={[style.button, "button"].join(' ')} style={{margin: "20px 0px"}}>
                            say hello
                        </div>
                    </a>
                </div>
            </MediaQuery>
        </div>
    )
}
