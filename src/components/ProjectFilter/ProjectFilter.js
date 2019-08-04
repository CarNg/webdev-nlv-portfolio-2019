import React from 'react'
import style from '../ProjectFilter/ProjectFilter.module.css';

export default function ProjectFilter() {
    return (
        <div id={style.filterWrapper}>
            <div className={["button", style.filterLink].join(' ')}>All</div>
            <div className={["button", style.filterLink].join(' ')}>Web Dev</div>
            <div className={["button", style.filterLink].join(' ')}>Digital Games</div>
            <div className={["button", style.filterLink].join(' ')}>Analog Games</div>
        </div>
    )
}
