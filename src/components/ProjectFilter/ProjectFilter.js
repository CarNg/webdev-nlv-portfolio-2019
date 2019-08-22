import React, {PureComponent} from 'react'
import style from '../ProjectFilter/ProjectFilter.module.css';

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
            <div id={style.filterWrapper}>
                <div className={this.props.currentFilter === "" ? selectedStyle : defaultStyle} onClick={() => {this.handleFilterChange("")}}>All Projects</div>
                <div className={this.props.currentFilter === "Web" ? selectedStyle : defaultStyle} onClick={() => {this.handleFilterChange("Web")}}>Web Dev</div>
                <div className={this.props.currentFilter === "Digital" ? selectedStyle : defaultStyle} onClick={() => {this.handleFilterChange("Digital")}}>Digital Games</div>
                <div className={this.props.currentFilter === "Analog" ? selectedStyle : defaultStyle} onClick={() => {this.handleFilterChange("Analog")}}>Analog Games</div>
            </div>
        )
    };
}
