import React, {Component} from 'react';
import {Link} from 'react-router';

import stats from "../../images/stats.png"

class Statistics extends Component {
  render() {
    return (
      <div className="main-content courses">
        <div className="course-header group">
        <h2>Statistics</h2>
        <p> Statistics Algorithms </p>
        <a href="https://github.com/lloucks/Statistics">
        Click Here to See the Statistics Algorithms
        <br />
        <img src = {stats} /> 
        </a>
       
          <ul className="course-nav">
          	
          </ul>
        </div>
         
      </div>
    );
  }
}

export default Statistics;
