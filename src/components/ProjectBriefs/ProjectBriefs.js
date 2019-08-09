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
            details = "Platform";
        }
        else if (project.type === "Web") {
            details = project.details.indexOf("\n") > -1 ? "Frameworks/Languages" : "Framework/Language";
        }
        else{
            details = "";
        }

        let externalLink;
        if(project.link){
            if(project.link.includes("github")){
                externalLink = <a href={project.link} target="_blank" rel="noopener noreferrer"><div className={[style.button, "button"].join(' ')} style={{marginLeft: "15px"}}> View Code </div></a>;
            }
            else if(project.link.includes("itch")){
                externalLink = <a href={project.link} target="_blank" rel="noopener noreferrer"><div className={[style.button, "button"].join(' ')} style={{marginLeft: "15px"}}> Play Now </div></a>;
            }
            else{
                externalLink = <a href={project.link} target="_blank" rel="noopener noreferrer"><div className={[style.button, "button"].join(' ')} style={{marginLeft: "15px"}}> App Info </div></a>;
            }
        }
        else {
            externalLink = null;
        }

        return (
            <div key={project.id} className={style.projectBrief} style={project.background}>
                <div className={`${style.projectInfo} ${colorCode}`}>
                    <span className={style.projectTitle}>{project.title}</span>
                    <span className={style.projectRole}>{project.role}</span>
                    <div className={style.blurb}>
                        <p>{project.intro}</p>
                        <p>
                            {details === "" ? null : <span style={{lineHeight:"2rem"}}>{details}<br/></span>}
                            {project.details}
                        </p>
                    </div>
                    <div className={style.readMore}>
                        <div className={[style.button, "button"].join(' ')}>
                            See More
                        </div>
                        {externalLink}
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
