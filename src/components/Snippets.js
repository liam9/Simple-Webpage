import React, {Component} from 'react';
import {Link} from 'react-router';

class Snippets extends Component {
  render() {
    return (
      <div className="main-content courses">
        <div className="course-header group">
          <h2>Snippets</h2>
          <ul className="course-nav">
            <li><Link to="snippets/geometry" activeClassName="active">Geometry</Link></li>
          </ul>
        </div>
          {this.props.children}
      </div>
    );
  }
}

export default Snippets;
