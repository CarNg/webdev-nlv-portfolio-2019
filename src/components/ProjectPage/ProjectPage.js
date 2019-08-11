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
        const button = {
            padding: "0.4rem 0.5rem 0.7rem 0.7rem",
            margin: "10px 10px 0px 10px",
            fontSize: "1.1em",
            fontWeight: "500",
            letterSpacing: "0.15em",
            height: "15px",
            width: "65px"
        }

        return (
            <div className={style.wrapper} id="projectModalScroll">
                <ProjectImages projectImages={this.props.projectImages}/>
                <div id={style.infoWrapper}>
                    <span id={style.projectTitle}>{this.props.projectTitle}</span>
                    <span id={style.projectSubtitle}>{this.props.projectRole}</span>
                    <br/>
                    <span id={style.projectDetails}>{this.props.projectDetails}</span>
                    <br/>
                    <br/>
                    <div style={button} className="button" onClick={this.handleOnClick}>
                        close
                    </div>
                </div>
            </div>
        )
    }
}