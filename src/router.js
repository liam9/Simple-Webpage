import React from 'react';
import {Router, Route,  IndexRedirect} from 'react-router';

import { createHistory, useBasename } from "history";
const browserHistory = useBasename(createHistory)({
    basename: "/"
});

// Components
import App from './components/App';
import Home from './components/Home.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Snippets from './components/Snippets.js';
import Articles from './components/Articles.js';
import Contact from './components/Contact.js';

import Matrix from './components/projects/Matrix.js';
import Statistics from './components/projects/Statistics.js';
import Polynomials from './components/projects/Polynomials.js';

import Geometry from './components/snippets/Geometry.js';

import Photonics from './components/articles/Photonics.js';
import DBMS from './components/articles/DBMS.js';

import NotFound from './components/NotFound.js';


// Routes
const Routes = (
  <Router history={browserHistory}>
    <Route component={App}>
        <Route path ="/" component={Home} />
        <Route path ="about" component={About} title="About"/>
        <Route path ="projects" component={Projects}>
          <IndexRedirect to= "matrix"/>
          <Route path = "matrix" component={Matrix} />
          <Route path = "statistics" component={Statistics} />
          <Route path = "polynomials" component={Polynomials} />
        </Route>
        <Route path="snippets" component={Snippets}>
        <IndexRedirect to= "geometry"/>
        <Route path= "geometry" component={Geometry} />
      </Route>
        
       <Route path="articles" component={Articles}>
	        <IndexRedirect to= "photonics"/>
	        <Route path= "photonics" component={Photonics} />
	        <Route path= "dbms" component={DBMS} />
      </Route>
        <Route path="contact" component={Contact} />
        <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;
