import './App.css';
import Nav from './components/Nav/Nav'
import Home from './components/pages/Home/Home';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'


// import Hero from './components/Hero';
// import Header from './components/Header';

function App() {
  return (
    <div>
      <Router>
          <Nav />
        <Switch>
          <Route path='/'  component={Home}/>
        </Switch>
      </Router>
      

    </div>
    
  );
}

export default App;
