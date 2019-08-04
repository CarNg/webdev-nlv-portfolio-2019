import React from 'react'
import style from '../ProjectBriefs/ProjectBriefs.module.css'
import ProjectList from '../ProjectBriefs/ProjectList.json'

export default function ProjectBrief(props) {
    const projects = ProjectList.map((project) =>
        (
            <div key={project.id} className={style.projectBrief} style={project.background}>
                <div className={style.projectInfo} style={textColor(project.type)}>
                    <span className={style.projectTitle}>{project.title}</span>
                    <span className={style.projectRole}>{project.role}</span>
                    <div className={style.readMore}>
                        <div className={[style.button, "button"].join(' ')}>
                            Read More
                        </div>
                    </div>
                </div>
            </div>
        )
    );

    function textColor (type) {
        if(type === "Digital Game"){
            return {color: "var(--nlv-cyan)"}
        }
        else if(type === "Analog Game"){
            return {color: "var(--nlv-red)"}
        }
    }

    return (
        <div id={style.scrollWrapper}>
            {projects}        
        </div>
    )
}
