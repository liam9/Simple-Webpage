import React, {Component} from 'react';
import {Link} from 'react-router';

import Optical_Chip from "../../images/Optical_Chip.png"
import Photonic_Computing from "../../images/Photonic_Computing.png"

class Photonics extends Component {
  render() {
    return (
    		
    	<div>	
	      <div className="main-content courses">
	        <div className="course-header group">
	          <h2>Photonics</h2>
	          <h3> &emsp; Optical Computing </h3>
	          <ul className="course-nav">
	          <img src = {Optical_Chip} />
	            
	          </ul>
	        </div>
	         
	      </div>
	      
	      <div>
	      	<pre>{`
	      			    	HPE's New Chip Marks a 
	      				Milestone in Optical Computing 


The experimental 1,000-component optical 
processor is made for challenges like the “traveling 
salesman problem” 

Posted 2 Jan 2017 | 16:00 GMT 

By RACHEL COURTLAND 

https://spectrum.ieee.org/semiconductors/processors/hpes-new-chip-marks-a-milestone-in-optical-
computing 

 

 

http://www.jampotphotonics.com/wp-content/uploads/2014/10/Photonic-computing.jpg 


We may use photons to carry our data, but we rely on the electron to put it 
to use. One day that division of labor might not be so stark. A team 
at Hewlett Packard Labs, in Palo Alto, Calif., has built a demonstration chip 
that could help push some particularly thorny computations into the realm 
of light, potentially boosting speed and saving energy in the process. 

Silicon integrated circuits containing parts that can manipulate light are not 
new. But this chip, which integrates 1,052 optical components, is the biggest 
and most complex in which all the photonic components work together to 
perform a computation, says team member Dave Kielpinski, a senior 
research scientist at Hewlett Packard Labs (now a part of Hewlett Packard 
Enterprise, or HPE). “We believe that it is by a wide margin,” he says. 

The chip, which was developed through the U.S. Defense Advanced 
Research Projects Agency’s Mesodynamic Architectures program and was 
still undergoing testing as IEEE Spectrum went to press, is an 
implementation of an Ising machine—an approach to computation that 
could potentially solve some problems, such as the infamous “traveling 
salesman problem,” faster than conventional computers can. 

The Ising approach is based on a century-old model for how the magnetic 
fields of atoms interact to give rise to magnetism. The model envisions 
every atom as having a property called “spin” that prefers to point either up 
or down. In a ferromagnetic material, above a certain temperature, these 
spins are oriented randomly and are flipped repeatedly by heat. But when 
the temperature falls below a certain threshold, the interactions between 
the atoms dominate, and most of the spins settle down to point in the same 
direction. 

Computers inspired by this model—so-called Ising machines—use such 
settling actions to arrive at answers to optimization problems. The problem 
to be solved is entered into the machine by tuning the interactions between 
its computational elements. These elements, the spins, are designed to be in 
one of two states and interact with one another until they settle into an 
optimal configuration that corresponds to a low-energy state. 

Stanford University’s Yoshihisa Yamamoto pioneered an approach to 
building such a machine with light. The spins in his system are two phases 
of light that are 180 degrees out of phase of each other. In 2014, Yamamoto 
and his colleagues reported the construction of a four-spin machine based 
on this idea in the laboratory, built with mirrors, lasers, and other optical 
components. 

But scaling up the machine was complicated by a macroscopic effect—
ordinary acoustic noise, says Peter McMahon, a member of Yamamoto’s 


group at Stanford. Even the vibrations created by someone emptying a 
nearby waste bin could cause a subtle expansion or contraction of a delay 
line, a part of the system that is used to impart delays so that spins can 
interact properly when they meet. This kind of expansion or contraction 
could alter the phase of the light enough to disrupt computation. While such 
perturbations can be corrected, McMahon says, scaling up the system was 
looking as though it was going to be an impractical and expensive prospect. 
So in the end, the team altered their approach, introducing electronic 
feedback into the mix. In October 2016, McMahon and his colleagues 
reported in the journal Science that they had used this hybrid optical-
electronic system to create an Ising machine with 100 spins. Research 
reported in the same issue by a number of the same scientists extended the 
technique to create a more specialized, 2,000-spin computer. 

 

Photo: Hewlett Packard EnterpriseDown To The Wire: A close-up of the Hewlett Packard 
Enterprise chip shows heater wires, microring resonators, wave guides, and optical 
input/output components. 

The HPE chip is designed to be a compact approach that doesn’t need such 
electronic feedback. Four areas on the chip, called nodes, support four spins 
made of infrared light. After the light exits each node, it is split up and 
combined with light from each of the other nodes inside an interferometer. 
Electric heaters built into the interferometer are used to alter the index of 
refraction and physical size of nearby components. This adjusts the optical 
path length of each light beam—and thus its phase relative to the other 
beams. The heater temperatures encode the problem to be solved, as they 
determine how strongly the state of one spin is weighed against another 
when two beams are combined. The outputs of all these interactions are 
then condensed and fed back into the nodes, where structures called 
microring resonators clean up the light in each node so it once again has 
one of two phases. The light cycles over and over through the interferometer 
and the nodes, flipping spins between phases of 0 degrees and 180 degrees 
until the system equilibrates to a single answer. 

McMahon says this system could eliminate the vibrational problem faced by 
the 2014 Ising machine. “If you integrate everything on a small chip,” he 
says, the paths that light takes are etched in silicon. “Those are almost by 
definition very fixed things,” he explains, such that any vibration or 
temperature swing will tend to affect all the paths that light can take 


equally. But McMahon notes it’s still early days for this approach to 
computing; the basic physics by which these optical systems arrive at 
equilibrium still needs to be explored, he says, as does their potential 
competitiveness with conventional machines. 

A key aim of HPE’s chip project, Dave Kielpinski says, was to push the limits 
of photonic chip design. “One of the things we’re proudest of is our 
computer-aided layout tools,” he says. He presented the chip in October in 
San Diego at the inaugural IEEE International Conference on Rebooting 
Computing, which gathered researchers investigating a number of 
alternatives that could help keep improving computers as Moore’s Law 
peters out. 

In the future, Ising chips such as these might be able to act as accelerators, 
speedy specialists much like the graphics processing units used in many of 
today’s machines. Kielpinski says the team is investigating designs that 
could be used to scale up to a larger number of spins. 

This article appears in the January 2017 print issue as “The Ising on the 
Computer Chip.” 
	      			
	      	`}</pre>
	      </div>
	      
	      <img src = {Photonic_Computing} />
	      
	    </div>
    );
  }
}

export default Photonics;
