import React from 'react'
import style from '../ProjectPage/ProjectPage.module.css'
import ProjectImages from '../ProjectImages/ProjectImages'

const ProjectPage = (props) => {
    return (
        <div id={style.wrapper}>
            <ProjectImages/>
            <div id={style.infoWrapper}>
                <span id={style.projectTitle}>Project Title</span>
                <span id={style.projectSubtitle}>Project Role / Project Type</span>
                <p id={style.projectDetails}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis hendrerit nibh non placerat. Nunc et egestas ligula, eu cursus lectus. Pellentesque iaculis tellus nibh, sed auctor velit finibus sed. Phasellus sed massa venenatis, pharetra dui a, consequat lorem. Morbi lorem sem, finibus et purus id, molestie ultrices erat. Integer suscipit mauris nibh, non tristique diam molestie quis. Cras diam felis, lobortis a sodales vel, tincidunt ut nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam dapibus quam in enim tincidunt ornare. Fusce eget leo porttitor, iaculis lectus et, faucibus diam. Curabitur sed scelerisque sapien.</p>
                <div style={button} className="button">
                    close
                </div>
            </div>
        </div>
    )
}

const button = {
    padding: "0.3rem 0.5rem 0.6rem 0.7rem",
    margin: "10px 10px 0px 10px",
    fontSize: "1.1em",
    fontWeight: "500",
    letterSpacing: "0.15em",
    height: "15px",
    width: "65px"
}

export default ProjectPage
