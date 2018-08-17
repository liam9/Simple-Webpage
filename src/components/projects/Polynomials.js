import React, {Component} from 'react';
import {Link} from 'react-router';

import hermite from "../../images/hermite.png"

class Polynomials extends Component {
  render() {
    return (
      <div className="main-content courses">
        <div className="course-header group">
        <h2>Polynomials</h2>
        <p> Polynomial Calculator </p>
        <a href="https://github.com/lloucks/Polynomial-Calculator">
        Click Here to See the Polynomial Calculator
       <br />
        <img src = {hermite} />
        </a>
          <ul className="course-nav">
          	
          </ul>
        </div>
         
      </div>
    );
  }
}

export default Polynomials;
