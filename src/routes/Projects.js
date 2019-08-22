import React, {Component} from 'react';
//Components
import ProjectBriefs from '../components/ProjectBriefs/ProjectBriefs';
import ProjectFilter from '../components/ProjectFilter/ProjectFilter';

export default class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { filter : "" }
        this.handleFilterProjects = this.handleFilterProjects.bind(this);
    }

    handleFilterProjects(filterValue) {
        this.setState({ filter : filterValue });
    }

    render(){
        return (
            <div className="pageWrapper" style={{overflow: "hidden"}}>
                <ProjectFilter onFilterChange={this.handleFilterProjects} currentFilter={this.state.filter}/>
                <ProjectBriefs filter={this.state.filter} />
            </div>
        )
    };
}