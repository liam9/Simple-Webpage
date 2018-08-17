import React, {Component} from 'react';

import dragon_ring from "../images/dragon_ring.png"

class About extends Component {
  render() {
    return (
      <div className="main-content">
	        <h1>{this.props.route.title}</h1>
	        <p>Hey, <br /> Im Liam Loucks </p>  <br /> 
	        
	        <div className="education">
		        <h1> Education </h1>
		        <p>University of Victoria</p>
		        <h3> BSc Computer Science and Mathematics / Minor in Physics </h3>
		        <a href="https://www.uvic.ca/">University Website</a>
	        </div>
	        
	        <div className = "experience">
		        <h1> Experience </h1>
		        <p>SNP-AG</p>
		        <h3> Software Developer Intern </h3>
		        <a href="https://www.snp-ag.com/">Company Website</a>
		     </div>
		     
		     <div className = "projects">
		     	<h1> Projects </h1>  
		     	
		     	<ul>
		     	  <li>Matrix Solver</li>
		     	  <li>Stats Algorithms</li>
		     	  <li>Polynomial Calculator</li>
		     	  <li>Others</li>
		     	</ul>  
		      </div>
		      
		      <br /> <br /> <br /> <br /><br />
		      <p>I enjoy playing hockey, badminton, and listening to music</p>
		        <p>I was a part of the Triathlon Club at my university </p>
		        <p>Hiking and Camping are the best weekend activity </p>
		        <br /> <br /> <br /> <br /><br />
		      
		      <a href="https://github.com/lloucks/spamegg_DRAW265">
			      Below is a Dragon Curve Fractal done by Jacob and I 	
			      <br />
			      <img src = {dragon_ring} />
		      </a>
	    </div>
    );
  }
}

export default About;
