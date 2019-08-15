import React, {Component} from 'react'
import style from '../ProjectPage/ProjectPage.module.css'
import ProjectImages from '../ProjectImages/ProjectImages'

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
    
        const details = detailsArray.map((detail, index, array) => {
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
        let externalLink;
        if(this.props.projectLink){
            if(this.props.projectLink.includes("github")){
                externalLink = <a href={this.props.link} target="_blank" rel="noopener noreferrer"><div className={[style.button, "button"].join(' ')} style={{marginLeft: "15px"}}> View Code </div></a>;
            }
            else if(this.props.projectLink.includes("itch")){
                externalLink = <a href={this.props.link} target="_blank" rel="noopener noreferrer"><div className={[style.button, "button"].join(' ')} style={{marginLeft: "15px"}}> Play Now </div></a>;
            }
            else{
                externalLink = <a href={this.props.link} target="_blank" rel="noopener noreferrer"><div className={[style.button, "button"].join(' ')} style={{marginLeft: "15px"}}> App Info </div></a>;
            }
        }
        else {
            externalLink = null;
        }

        return (
            <div className={style.wrapper} id="projectModalScroll">
                <ProjectImages projectImages={this.props.projectImages}/>
                <div id={style.infoWrapper}>
                    <span id={style.projectTitle}>{this.props.projectTitle}</span>
                    <span id={style.projectSubtitle}>{this.props.projectRole}</span>
                    <br/>
                    <div id={style.projectDetails}>
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