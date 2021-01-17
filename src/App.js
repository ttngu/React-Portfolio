import './App.css';
import Home from './components/pages/Home/Home';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavTabs from './components/NavTabs/NavTabs';
import About from './components/pages/About/About';
import Portfolio from './components/pages/Portfolio/Portfolio';


// import Hero from './components/Hero';

function App() {
  return (
    <div>
      <NavTabs />
      {/* <Home /> */}
      {/* <About /> */}
      <Portfolio />

      {/* <Router>
        <Switch>
          
          
          <Route path='/'  component={Home}/>
          <Route path='/#about'  component={About}/>
          
        </Switch>
      </Router> */}
      

    </div>
    
  );
}

export default App;
