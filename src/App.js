/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import HomePage from './pages/Homepage/HomePage';
import About from './pages/About/index';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/index';



function App() {
  return ( 
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route  path='/homepage' component={HomePage} />
      <Route  path='/about' component={About} />
      <Route  path='/blog' component={Blog} />
      <Route  path='/contact' component={Contact} />
    </Switch>
    </BrowserRouter>
         
          
  );
}

export default App;
