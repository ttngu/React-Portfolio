import './App.css';
import Home from './components/pages/Home/Home';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavTabs from './components/NavTabs/NavTabs';


// import Hero from './components/Hero';
// import Header from './components/Header';

function App() {
  return (
    <div>
      <NavTabs />
      <Router>
        <Switch>
          <Route path='/'  component={Home}/>
          
        </Switch>
      </Router>
      

    </div>
    
  );
}

export default App;
