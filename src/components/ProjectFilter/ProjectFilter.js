import React, {Component} from 'react'
import style from '../ProjectFilter/ProjectFilter.module.css';
import { throwStatement } from '@babel/types';

export default class ProjectFilter extends Component {
    constructor(props){
        super(props);
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    handleFilterChange(filterValue){
        this.props.onFilterChange(filterValue);
    }

    render(){
        return (
            <div id={style.filterWrapper}>
                <div className={["button", style.filterLink].join(' ')} onClick={() => {this.handleFilterChange("")}}>All</div>
                <div className={["button", style.filterLink].join(' ')} onClick={() => {this.handleFilterChange("Web")}}>Web Dev</div>
                <div className={["button", style.filterLink].join(' ')} onClick={() => {this.handleFilterChange("Digital")}}>Digital Games</div>
                <div className={["button", style.filterLink].join(' ')} onClick={() => {this.handleFilterChange("Analog")}}>Analog Games</div>
            </div>
        )
    };
}
