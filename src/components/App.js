import React, { Component } from 'react';
import {Link} from 'react-router';

class App extends Component {
  render() {
	  const Navbar = {	
	    backgroundColor: "tomato",
	    color: "white",
	    padding: "10px",	
	  }
    return (
      <div className="container">
        <header>
          <span style={Navbar}><i className="material-icons">functions</i></span>
          <ul className="main-nav">
            <li><Link to="/" activeClassName="active">Home</Link></li>
            <li><Link to="/about" activeClassName="active">About</Link></li>
            <li><Link to="/projects" activeClassName="active">Projects</Link></li>
            <li><Link to="/snippets" activeClassName="active">Snippets</Link></li>
            <li><Link to="/articles" activeClassName="active">Articles</Link></li>
            <li><Link to="/contact" activeClassName="active">Contact</Link></li>
          </ul>
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default App;
