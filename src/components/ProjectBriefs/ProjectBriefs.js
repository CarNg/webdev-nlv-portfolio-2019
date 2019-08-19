import React, { Component } from 'react';
import style from '../ProjectBriefs/ProjectBriefs.module.css'
import Modal from 'react-awesome-modal';
import ProjectPage from '../ProjectPage/ProjectPage';
import 'whatwg-fetch';

export default class ProjectBriefs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading : true,
            modalVisible : false,
            projectSlideshow: [],
            projectTitle: "",
            projectRole: "",
            projectDetails: "",
            projectLink: "",
            projectList: []
        }
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        window.fetch('https://carng.github.io/webdev-nlv-portfolio-2019/ProjectsList.json')
            .then(response => response.json())
            .then(data => (
                this.setState({ 
                    projectList: data,
                    isLoading: false
                })
            ));
    }

    openModal(projectSlideshow, projectTitle, projectRole, projectDetails, projectLink) {
        this.setState({
            modalVisible : true,
            projectSlideshow: projectSlideshow,
            projectTitle: projectTitle,
            projectRole: projectRole,
            projectDetails: projectDetails,
            projectLink: projectLink
        });
    }

    closeModal() {
        document.getElementById("projectModalScroll").scrollTop = 0;
        this.setState({
            modalVisible : false
        });
    }

    render(){
        const {projectList} = this.state;
        const projects = projectList.map((project) =>{
            //Color coding for digital, analog or web project
            let colorCode = style.cyan;
            if(project.type === "Digital"){
                colorCode = style.red;
            }
            else if (project.type === "Analog") {
                colorCode = style.black;
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
                            <div className={[style.button, "button"].join(' ')}  onClick={() => (
                                this.openModal(project.slideshow, project.title, project.role, project.projectDetails, project.link)
                            )} >
                                Learn More
                            </div>
                        </div>
                    </div>
                </div>;
            }
            return projectBrief;
        });

        if (this.state.isLoading) {
            return (
                <div id={style.loading}>
                    <div className={style.ldsEllipsis}><div></div><div></div><div></div><div></div></div>
                    <div id={style.loadingText}>Grabbing those projects for you</div>
                    <div className={style.ldsEllipsis}><div></div><div></div><div></div><div></div></div>
                </div>
            )
        }

        return (
            <React.Fragment>
                <Modal 
                    id="projectModal"
                    visible={this.state.modalVisible}
                    width="85%"
                    height="85%"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <ProjectPage 
                        projectTitle={this.state.projectTitle} 
                        projectRole={this.state.projectRole} 
                        projectDetails={this.state.projectDetails} 
                        projectSlideshow={this.state.projectSlideshow} 
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
