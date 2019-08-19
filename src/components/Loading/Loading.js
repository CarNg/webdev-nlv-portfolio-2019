import React from 'react'
import style from '../Loading/Loading.module.css'

export default function Loading(props) {
    return (
        <div id={style.loading} className={props.hideShow}>
            <div className={style.ldsEllipsis}><div></div><div></div><div></div><div></div></div>
            <div id={style.loadingText}>{props.loadingText}</div>
            <div className={style.ldsEllipsis}><div></div><div></div><div></div><div></div></div>
        </div>
    )
}
