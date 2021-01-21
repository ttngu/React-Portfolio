import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavTabs from './components/NavTabs/NavTabs';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Portfolio from './components/pages/Portfolio/Portfolio';
import Contact from './components/pages/Contact/Contact';


// import Hero from './components/Hero';

function App() {
  return (
    <div>
      <Router>
        <NavTabs /> 
        <Switch>
          <Route path='/'  exact component={Home}/>
          <Route path='/about' component={About} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contact' component={Contact} />
          
        </Switch>
      </Router>
      

    </div>
    
  );
}

export default App;
