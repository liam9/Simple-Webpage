import React from 'react';
import instagram from "../images/icons/ig.png";
import github from "../images/icons/github.png";
import facebook from "../images/icons/facebook.png";
import linkedin from "../images/icons/linkedin.png"

class Contact extends React.Component {
	
	render(){

		return(
			<div>
			
				 <a href="https://www.instagram.com/loucksliam/">
				 	<img border="0" alt="Instagram" src={instagram} width="100" height="100" />
				 	<br />
				 	Follow me on instagram
				 </a>
				<br /> <br /> <br />
				
				 <a href="https://github.com/lloucks" >
				 	<img src={github} /> 
				 	<br />
				 	Follow me on github
				</a>
				<br /> <br /> <br />
				
				 <a href="https://www.linkedin.com/in/liam-loucks-6b521b1b/">
					 <img src={linkedin} />
					 <br />
					 Connect with me on Linkedin
				 </a>	 
			    
			    <br /> <br /> <br />
			    
			    <a href="https://www.facebook.com/liam.loucks">
					<img src = {facebook} />
					<br />
					Send me a message on Facebook
				</a>	
			    
			    <br /> <br /> <br />
			</div>
			
		)
		
		
		
	}
	
}

export default Contact;