import React, {PureComponent} from 'react'
import style from '../ProjectFilter/ProjectFilter.module.css';
import MediaQuery from 'react-responsive';

export default class ProjectFilter extends PureComponent {
    constructor(props){
        super(props);
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    handleFilterChange(filterValue){
        this.props.onFilterChange(filterValue);
    }

    render(){
        const defaultStyle = ["button", style.filterLink].join(' ');
        const selectedStyle = ["button", style.filterLink, style.selected].join(' ');

        return (
            <React.Fragment>
                <MediaQuery query="(min-device-width: 768px)">
                    <div id={style.filterWrapper}>
                        <div className={this.props.currentFilter === "" ? selectedStyle : defaultStyle} onClick={() => {this.handleFilterChange("")}}>All Projects</div>
                        <div className={this.props.currentFilter === "Web" ? selectedStyle : defaultStyle} onClick={() => {this.handleFilterChange("Web")}}>Web Dev</div>
                        <div className={this.props.currentFilter === "Digital" ? selectedStyle : defaultStyle} onClick={() => {this.handleFilterChange("Digital")}}>Digital Games</div>
                        <div className={this.props.currentFilter === "Analog" ? selectedStyle : defaultStyle} onClick={() => {this.handleFilterChange("Analog")}}>Analog Games</div>
                    </div>
                </MediaQuery>

                <MediaQuery query="(max-device-width: 767px)">
                    <div id={style.filterWrapper}>
                        <div className={this.props.currentFilter === "" ? selectedStyle : defaultStyle} onClick={() => {this.handleFilterChange("")}}>All</div>
                        <div className={this.props.currentFilter === "Web" ? selectedStyle : defaultStyle} onClick={() => {this.handleFilterChange("Web")}}>Web Dev</div>
                        <div className={this.props.currentFilter === "Games" ? selectedStyle : defaultStyle} onClick={() => {this.handleFilterChange("Games")}}>Games</div>
                    </div>
                </MediaQuery>
            </React.Fragment>
        )
    };
}
