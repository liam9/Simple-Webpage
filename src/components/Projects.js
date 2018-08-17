import React, {Component} from 'react';
import {Link} from 'react-router';

class Projects extends Component {
  render() {
    return (
      <div className="main-content courses">
        <div className="course-header group">
          <h2>Projects</h2>
          <ul className="course-nav">
            <li><Link to="projects/matrix" activeClassName="active">Matrix</Link></li>
            <li><Link to="projects/statistics" activeClassName="active">Statistics</Link></li>
            <li><Link to="projects/polynomials" activeClassName="active">Polynomials</Link></li>
          </ul>
        </div>
          {this.props.children}
      </div>
    );
  }
}

export default Projects;
