import React, {Component} from 'react';
import {Link} from 'react-router';

class Articles extends Component {
  render() {
    return (
      <div className="main-content courses">
        <div className="course-header group">
          <h2>Articles</h2>
          <ul className="course-nav">
            <li><Link to="articles/photonics" activeClassName="active">Photonics</Link></li>
            <li><Link to="articles/dbms" activeClassName="active">DBMS</Link></li>
          </ul>
        </div>
          {this.props.children}
      </div>
    );
  }
}

export default Articles;
