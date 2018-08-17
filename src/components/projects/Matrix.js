import React, {Component} from 'react';
import {Link} from 'react-router';

import matrix from "../../images/matrix.png"

class Matrix extends Component {
  render() {
    return (
      <div className="main-content courses">
        <div className="course-header group">
	      <h2>Matrix</h2>
	      <p> Matrix Solver </p>
          <a href="https://github.com/lloucks/Matrix-Solver">
          Click Here to See the Matrix Solver Code
          <br />
          <img src = {matrix} />
          </a> 
          <ul className="course-nav">
          
          </ul>
        </div>
         
      </div>
    );
  }
}

export default Matrix;
