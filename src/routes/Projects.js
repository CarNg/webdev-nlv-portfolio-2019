import React from 'react'
//Components
import ProjectBriefs from '../components/ProjectBriefs/ProjectBriefs';
import ProjectFilter from '../components/ProjectFilter/ProjectFilter';

export default function Projects() {
    return (
        <div style={wrapper}>
            <ProjectFilter />
            <ProjectBriefs />
        </div>
    )
}

const wrapper = {
    height: "calc(100% - 140px)",
    position: "relative",
    width: "calc(100% - 60px)",
    padding: "30px",
}