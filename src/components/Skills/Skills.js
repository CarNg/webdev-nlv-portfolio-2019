import React from 'react'
import style from '../Skills/Skills.module.css'

export default function Skills() {
    return (
        <div id={style.skillsWrapper}>            
            <ul className={style.skillList}>
                <li>
                    <em>HTML5</em>
                    <span className={`${style.expand} ${style.html5}`}></span>
                </li>
                <li>
                    <em>CSS3</em>
                    <span className={`${style.expand} ${style.css3}`}></span>
                </li>
                <li>
                    <em>JavaScript</em>
                    <span className={`${style.expand} ${style.javascript}`}></span>
                </li>
            </ul>

            <ul className={style.skillList}>
                <li>
                    <em>ReactJS</em>
                    <span className={`${style.expand} ${style.reactjs}`}></span>
                </li>
                <li>
                    <em>jQuery</em>
                    <span className={`${style.expand} ${style.jquery}`}></span>
                </li>
                <li>
                    <em>Bootstrap</em>
                    <span className={`${style.expand} ${style.bootstrap}`}></span>
                </li>
            </ul>
        </div>
    )
}
