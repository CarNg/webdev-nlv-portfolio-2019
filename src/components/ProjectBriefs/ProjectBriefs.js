import React, { Component } from 'react';
import style from '../ProjectBriefs/ProjectBriefs.module.css'
import ProjectList from '../../assets/data/ProjectList.json'
import Modal from 'react-awesome-modal';
import ProjectPage from '../ProjectPage/ProjectPage';


export default class ProjectBriefs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : true
        }
    }

    openModal(projectTitle) {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render(){
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
                <div key={project.id} className={style.projectBrief}>
                    <div style={project.background} className={style.background} />

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
                            <div className={[style.button, "button"].join(' ')}  onClick={() => this.openModal(project.title)} >
                                See More
                            </div>
                            {externalLink}
                        </div>
                    </div>
                </div>
            )
        });

        return (
            <React.Fragment>
                <Modal 
                    visible={this.state.visible}
                    width="75%"
                    height="75%"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <ProjectPage/>
                </Modal>
                <div id={style.scrollWrapper} onWheel={(e) => {document.getElementById(style.scrollWrapper).scrollBy(e.deltaY, 0)}}>
                    {projects}        
                </div>
            </React.Fragment>
        )
    }
}
