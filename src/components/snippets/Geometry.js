import React, {Component} from 'react';
import {Link} from 'react-router';

import particle from "../../images/135.png"
import spiral from "../../images/233.png"
import twist from "../../images/333.png"
import lasso from "../../images/345.png"

class Geometry extends Component {
  render() {
    return (
       <div>
       
	      <div className="main-content courses">
	        <div className="course-header group">
		          <h2> Geometry </h2>
		          <ul className="course-nav">
			          <h3> These Spiral Tunnels were produced by the code snippet below</h3>
			          <img src = {spiral} />
			          <img src = {spiral} />
			          <img src = {spiral} />
			          <img src = {spiral} />
			          <img src = {spiral} />
			          <img src = {spiral} />
			          <img src = {spiral} />
			          <img src = {spiral} />
			          <img src = {spiral} />
			          <img src = {spiral} />
			          <img src = {spiral} />
			          <img src = {spiral} />
		          </ul>
	          </div>  
	       </div>
	       
	       
	       
	       
	      <div> 
	      
          <pre>{`
        	  
        	  /*
			This is code generated the geometry above
			*/

import java.awt.Canvas;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Shape;
import java.awt.geom.Ellipse2D;
import java.awt.geom.GeneralPath;
import java.awt.geom.Line2D;
import java.awt.geom.Rectangle2D;
import java.awt.geom.RoundRectangle2D;
import java.awt.geom.CubicCurve2D;

import java.util.Scanner;

import javax.swing.JFrame;


public class Geometry extends JFrame {
  
  Shape shapes[];
  int numOfShapes;
  
  public static void main(String args[]) {
	Scanner scan = new Scanner(System.in);
	System.out.println("Type: (1-5)");
	int type = scan.nextInt();
    System.out.println("Style: (1-5)");
   int style = scan.nextInt();
   System.out.println("Density: (1-5)");
   int iterations = scan.nextInt();
   if(iterations > 5)
	   iterations = 5;
  
   Geometry app = new Geometry(type, style, iterations);
  }

  public Geometry(int type, int style, int iterations) {
    add("Center", new MyCanvas());
	
	
	numOfShapes = (exp(4, iterations));
    shapes = new Shape[numOfShapes];
   
    for (int i = 0; i < numOfShapes; ++i)
		shapes[i] = null;

	
	Generate(type, style, iterations, 1, 1, 1, 200, 200, 100, 100);
	
    setSize(500, 500);
    setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    setVisible(true);
  }
  
  
   // x!
  public int fact(int x){
		int sum = 1;
		for(int i = 1; i < x; i++){
			sum *= i;
		}
	  return sum; 
  }
   // x^b
  public int exp(int x, int b){
		int sum = 1;
		for(int i = 0; i < b; i++){
			sum *= x;
		}
	  return sum;
	  
  }
  

  
    public void Generate(int type, int style, int iterations, int count, int ySign, int xSign, double x, double y, double w, double h) {
	  if(count > (numOfShapes)-1)
		  return;
	  if(count % 2 == 0)
		  xSign = xSign*-1;
	  else 
		  ySign = ySign*-1;
	  
	  
	    //The recursive call
	   switch (type) {
            case 1:  Generate(type, style, iterations, count+1, ySign, xSign, x + (xSign*(x/2)), y + (ySign*(y/2)), w/2, h/2);
                     break;
            case 2:  Generate(type, style, iterations, count+1, ySign, xSign, x + (xSign*h)/(exp((int)x, 2)), y + (ySign*w*w)/(exp((int)y, 3)), w/2, h/2);
                     break;
			case 3:  Generate(type, style, iterations, count+1, ySign, xSign,  y + (xSign*fact((int)x))/(exp((int)x, 2)), x + (ySign*w*fact((int)x))/(exp((int)y, 3)), w/5, h/2);
                     break;
			case 4:  Generate(type, style, iterations, count+1, ySign, xSign,  h + (xSign*fact((int)x))/6, w + (ySign*w*fact((int)x))/(exp((int)y, 3)), w/5, h/2);
                     break;
			case 5:  Generate(type, style, iterations, count+1, ySign, xSign,  1/x, 1/y, w/2, h/2);
                     break;
            default: Generate(type, style, iterations, count+1, ySign, xSign, x + (xSign*h)/(exp((int)x, 2)), y + (ySign*w)/(exp((int)y, 3))/w, w/2, h/2);
                     break;
        }
	 
	  
	  
	  if(style == 1){
		  shapes[count] = new Line2D.Double(x, y, w, h); 
	  }
	  else if(style == 2){
		  shapes[count] = new Rectangle2D.Double(x, y, w, h);  
	  }
	   else if(style == 3){
		  shapes[count] = new Ellipse2D.Double(x, y, w, h); 
	  }
	   else if(style == 4){
		  shapes[count] = new CubicCurve2D.Double(x, y, w, h, w+h/2, h+y/2, x+h/2, y+w/2); 
	  }
	   else {
		  shapes[count] = new RoundRectangle2D.Double(x, y, w, h, 50.0, 25.0); 
	  }
	  
  }

  class MyCanvas extends Canvas {
    public void paint(Graphics graphics) {
      Graphics2D g = (Graphics2D) graphics;
      for (int i = 0; i < shapes.length; ++i) {
        if (shapes[i] != null)
          g.draw(shapes[i]);
      }
    }
  }
}

        	  
  
              
          `}</pre>
        </div>
         
      </div>
    );
  }
}

export default Geometry;