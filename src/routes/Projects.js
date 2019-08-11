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
        const wrapper = {
            height: "calc(100% - 140px)",
            position: "relative",
            width: "calc(84% - 60px)",
            padding: "40px 8%"
        }

        return (
            <div style={wrapper}>
                <ProjectFilter onFilterChange={this.handleFilterProjects} />
                <ProjectBriefs filter={this.state.filter} />
            </div>
        )
    };
}