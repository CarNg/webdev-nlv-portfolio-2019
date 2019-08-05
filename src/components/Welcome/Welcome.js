import React from 'react'
import style from './Welcome.module.css';
import {Link} from 'react-router-dom'

export default function Welcome() {
    return (
        <div className={style.welcomeWrapper}>
            <div className={style.centerInfo}>
                <div style={{borderLeft: "3px solid var(--nlv-red)", padding: "70px 0px 3px 30px"}}>
                    <h1>Carmen Ng</h1>
                    <h3>Web Developer/Game Designer</h3>
                    <h5>Originally based in Ireland, now based in Hong Kong. Orginally a web designer, now a web developer.</h5>
                </div>
                <Link to="/projects">
                    <div className={[style.button, "button"].join(' ')}>
                        view projects
                    </div>
                </Link>
                <div className={[style.button, "button"].join(' ')} style={{marginLeft: "0px"}}>
                    download resume
                </div>
            </div>
        </div>
    )
}
