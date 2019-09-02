import React from 'react'
import style from '../Skills/Skills.module.css'
import MediaQuery from 'react-responsive';

export default function Skills() {
    return (
        <React.Fragment>
            <MediaQuery query="(min-device-width: 768px)"> 
                <div id={style.skillsWrapper}>            
                    <div className={style.skillList}>
                        <span className={style.skillTitle}>Projects</span>
                            <br/>
                            Custom ERP Sites<br/>
                            POS Web App<br/>
                            OpenCart Sites<br/>
                            iOS Games<br/>
                            Board Games
                            <br/>
                    </div>
    
                    <div className={style.skillList}>
                        <span className={style.skillTitle}>Languages</span>
                            <br/>
                            HTML5<br/>
                            CSS3<br/>
                            JavaScript<br/>
                            English<br/>
                            Cantonese
                            <br/>
                    </div>
    
                    <div className={style.skillList}>
                        <span className={style.skillTitle}>Tools</span>
                            <br/>
                            React.js<br/>
                            Bootstrap<br/>
                            jQuery<br/>
                            Github<br/>
                            Photoshop
                            <br/>
                    </div>
                </div> 
            </MediaQuery>    
        </React.Fragment>

        

        //PREVIOUSLY USED ANIMATED SKILLS
        // <div id={style.skillsWrapper}>            
        //     <ul className={style.skillList}>
        //         <li>
        //             <em>HTML5</em>
        //             <span className={`${style.expand} ${style.html5}`}></span>
        //         </li>
        //         <li>
        //             <em>CSS3</em>
        //             <span className={`${style.expand} ${style.css3}`}></span>
        //         </li>
        //         <li>
        //             <em>JavaScript</em>
        //             <span className={`${style.expand} ${style.javascript}`}></span>
        //         </li>
        //     </ul>

        //     <ul className={style.skillList}>
        //         <li>
        //             <em>ReactJS</em>
        //             <span className={`${style.expand} ${style.reactjs}`}></span>
        //         </li>
        //         <li>
        //             <em>jQuery</em>
        //             <span className={`${style.expand} ${style.jquery}`}></span>
        //         </li>
        //         <li>
        //             <em>Bootstrap</em>
        //             <span className={`${style.expand} ${style.bootstrap}`}></span>
        //         </li>
        //     </ul>
        // </div>
    )
}
