import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Merchants from './Merchants';
import Tplocator from './Tplocator';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
         <Route path = "/about" exact component={About} />
         <Route path = "/merchants" exact component={Merchants} />
         <Route path = "/tp-locator" exact component={Tplocator} />
        </Switch>
      </div>
    </Router> 
  );
}

export default App;
