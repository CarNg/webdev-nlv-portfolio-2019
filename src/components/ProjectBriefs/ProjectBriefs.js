import React from 'react'
import style from '../ProjectBriefs/ProjectBriefs.module.css'
import ProjectList from '../ProjectBriefs/ProjectList.json'

export default function ProjectBrief(props) {

    const projects = ProjectList.map((project) =>{
        let colorCode = style.cyan;
        if(project.type === "Digital Game"){
            colorCode = style.red;
        }
        else if (project.type === "Analog Game") {
            colorCode = style.white;
        }

        let details = "";
        if(project.type === "Digital Game"){
            details = "Engine";
        }
        else if (project.type === "Analog Game") {
            details = "Gameplay";
        }else{
            details = /\s/.test(project.details) ? "Language(s)" : "Language";
        }

        return (
            <div key={project.id} className={style.projectBrief} style={project.background}>
                <div className={`${style.projectInfo} ${colorCode}`}>
                    <span className={style.projectTitle}>{project.title}</span>
                    <span className={style.projectRole}>{project.role}</span>
                    <div className={style.blurb}>
                        <p>{project.intro}</p>
                        <p>
                            <span style={{lineHeight:"2rem"}}>{details}</span>
                            <br/>{project.details}
                        </p>
                        {project.github ? <a href={project.github}>&rsaquo; View Github &lsaquo;</a> : null}
                    </div>
                    <div className={style.readMore}>
                        <div className={[style.button, "button"].join(' ')}>
                            Read More
                        </div>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div id={style.scrollWrapper} onWheel={(e) => {document.getElementById(style.scrollWrapper).scrollBy(e.deltaY, 0)}}>
            {projects}        
        </div>
    )
}
