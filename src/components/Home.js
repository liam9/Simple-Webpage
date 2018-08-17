import React, { Component } from 'react';
import Router from 'react-router';
import {browserHistory} from 'react-router';
import {Link} from 'react-router';

import CastleMountain3 from "../images/CastleMountain3.png";
import Cloud_Zoom from "../images/Cloud_Zoom.gif";

class Home extends Component {


  render() {
    return (
      <div className="main-content home">
        <h2>Welcome</h2>
        <h1>I am Liam Loucks</h1>
        <p><em>This is my personal webpage</em></p>
        <p>It has a personal bio, some code, and some intersting news articles</p>
        <br />  <br />  <br />  <br />
        <a href="http://www.peakfinder.com/peakfinder.ASP?PeakName=castle+mountain+(alberta)">
	        The picture below is Castle Mountain in Alberta, Canada
	        <br/>
	        <img src = {CastleMountain3} />
	    </a>   		
        <hr />
        <br />
        <a href="https://konczakowski.tumblr.com/post/92690044005">
        	Feliks Tomasz Konczakowski Visual Artist
        	<br />
        	<img src={Cloud_Zoom} />
		</a>
        	

      </div>
    );
  }
}



export default Home;
