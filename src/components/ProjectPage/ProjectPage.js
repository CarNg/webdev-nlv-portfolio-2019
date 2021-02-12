import React, {Component} from 'react'
import style from '../ProjectPage/ProjectPage.module.css'
import ProjectImages from '../ProjectImages/ProjectImages'
import MediaQuery from 'react-responsive';


export default class ProjectPage extends Component {
    constructor(props){
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(){
        this.props.onCloseClick();
    }

    render(){
        //Project key generation 
        let projectDetailsObj = this.props.projectDetails;
        var detailsArray = Object.keys(projectDetailsObj).map(function(key) {
            return [key, projectDetailsObj[key]];
        });
    
        const details = detailsArray.map((detail, index) => {
            return (
                <React.Fragment key={index}>
                    <div className={style.columnTitle}>
                        {detail[0]}
                    </div>
                    <div className={style.columnDetails}>
                        {detail[1]}
                    </div>
                </React.Fragment>
            )
        });

        //External link button generation
        let externalLink = null;
        if(this.props.projectLink){
            let links = this.props.projectLink.split(";");
            externalLink = links.map((link, index) => {
                if(link.includes("github") && !link.includes(".io")){
                    return <a href={link} target="_blank" rel="noopener noreferrer" key={index}><div className={[style.button, "button"].join(' ')}> Examine Code </div></a>
                }
                else if(link.includes("itch")){
                    return <a href={link} target="_blank" rel="noopener noreferrer" key={index}><div className={[style.button, "button"].join(' ')}> Play Now </div></a>
                }
                else{
                    return <a href={link} target="_blank" rel="noopener noreferrer" key={index}><div className={[style.button, "button"].join(' ')}> Visit Site </div></a>
                }
            });
        }

        //Project key generation 
        let projectBlurb = null;
        let projectKeyObj = this.props.projectBlurb;
        if(projectKeyObj){
            var keyArray = Object.keys(projectKeyObj).map(function(key) {
                return [key, projectKeyObj[key]];
            });
        
            projectBlurb = keyArray.map((keyItem, index) => {
                return (
                    <React.Fragment key={index}>
                        <i><span style={{color: "var(--nlv-red)", fontWeight: "600"}}> {keyItem[0]} </span>
                        <br/>
                        <span> {keyItem[1]} </span></i>
                        <br/>
                    </React.Fragment>
                )
            });
        }
        

        return (
            <div className={style.wrapper} id="projectModalScroll">
                <ProjectImages projectSlideshow={this.props.projectSlideshow}/>
                <div id={style.infoWrapper}>
                    <span id={style.projectTitle}>{this.props.projectTitle}</span>
                    <span id={style.projectSubtitle}>{this.props.projectRole}</span>
                    <br/>
                    <div id={style.projectDetails}>
                        <MediaQuery query="(max-device-width: 767px)">
                            <div className={style.projectBlurb}>
                                {projectBlurb}
                            </div>
                        </MediaQuery>
                        {details}
                    </div>
                    <br/>
                    <br/>
                    {externalLink}
                    <div className={["button", style.button].join(" ")} onClick={this.handleOnClick}>
                        close
                    </div>
                </div>
            </div>
        )
    }
}