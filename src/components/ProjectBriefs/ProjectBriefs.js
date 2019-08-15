import React, { Component } from 'react';
import style from '../ProjectBriefs/ProjectBriefs.module.css'
import ProjectList from '../../assets/data/ProjectList.json'
import Modal from 'react-awesome-modal';
import ProjectPage from '../ProjectPage/ProjectPage';

export default class ProjectBriefs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false,
            projectImages: [],
            projectTitle: "",
            projectRole: "",
            projectDetails: "",
            projectLink: ""
        }
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(projectImages, projectTitle, projectRole, projectDetails, projectLink) {
        this.setState({
            visible : true,
            projectImages: projectImages,
            projectTitle: projectTitle,
            projectRole: projectRole,
            projectDetails: projectDetails,
            projectLink: projectLink
        });
    }

    closeModal() {
        document.getElementById("projectModalScroll").scrollTop = 0;
        this.setState({
            visible : false
        });
    }

    render(){
        const projects = ProjectList.map((project) =>{
            //Color coding for digital, analog or web project
            let colorCode = style.cyan;
            if(project.type === "Digital"){
                colorCode = style.red;
            }
            else if (project.type === "Analog") {
                colorCode = style.white;
            }
            
            //Project key generation 
            let projectKeyObj = project.projectKey;
            var keyArray = Object.keys(projectKeyObj).map(function(key) {
                return [key, projectKeyObj[key]];
            });
        
            const keyList = keyArray.map((keyItem, index) => {
                return (
                    <React.Fragment key={index}>
                        <br/>
                        <span style={{fontWeight: "600", color: "var(--nlv-cyan)"}}>{keyItem[0]}</span>
                        <br/>
                        <span>{keyItem[1]}</span>
                    </React.Fragment>
                )
            }); 
    
            //External link button generation
            let externalLink;
            if(project.link){
                if(project.link.includes("github")){
                    externalLink = <a href={project.link} target="_blank" rel="noopener noreferrer"><div className={[style.button, "button"].join(' ')} style={{marginRight: "15px"}}> View Code </div></a>;
                }
                else if(project.link.includes("itch")){
                    externalLink = <a href={project.link} target="_blank" rel="noopener noreferrer"><div className={[style.button, "button"].join(' ')} style={{marginRight: "15px"}}> Play Now </div></a>;
                }
                else{
                    externalLink = <a href={project.link} target="_blank" rel="noopener noreferrer"><div className={[style.button, "button"].join(' ')} style={{marginRight: "15px"}}> App Info </div></a>;
                }
            }
            else {
                externalLink = null;
            }

            //Project brief gneration dependant on filter
            let projectBrief = null;
            if(this.props.filter === "" || this.props.filter === project.type){
                projectBrief = 
                <div key={project.id} className={style.projectBrief}>
                    <div style={project.background} className={style.background} />

                    <div className={`${style.projectInfo} ${colorCode}`}>
                        <span className={style.projectTitle}>{project.title}</span>
                        <span className={style.projectRole}>{project.role}</span>
                        <div className={style.blurb}>
                            <p>{project.intro} {keyList}</p>
                        </div>
                        <div className={style.readMore}>
                            {externalLink}
                            <div className={[style.button, "button"].join(' ')}  onClick={() => (
                                this.openModal(project.images, project.title, project.role, project.projectDetails, project.link)
                            )} >
                                See More
                            </div>
                        </div>
                    </div>
                </div>;
            }
            return projectBrief;
        });

        return (
            <React.Fragment>
                <Modal 
                    id="projectModal"
                    visible={this.state.visible}
                    width="75%"
                    height="75%"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <ProjectPage 
                        projectTitle={this.state.projectTitle} 
                        projectRole={this.state.projectRole} 
                        projectDetails={this.state.projectDetails} 
                        projectImages={this.state.projectImages} 
                        projectLink={this.state.projectLink}
                        onCloseClick={this.closeModal}
                    />
                </Modal>
                <div id={style.scrollWrapper} onWheel={(e) => {document.getElementById(style.scrollWrapper).scrollBy(e.deltaY, 0)}}>
                    {projects}        
                </div>
            </React.Fragment>
        )
    }
}
