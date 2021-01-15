import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/pages/Home/Home';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'


// import Hero from './components/Hero';
// import Header from './components/Header';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/'  component={Home}/>
        </Switch>
      </Router>
      

    </div>
    
  );
}

export default App;
