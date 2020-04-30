import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Merchants from './Merchants';
import Tplocator from './Tplocator';
import Getkey from './Getkey';
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
         <Route path = "/get-key" exact component={Getkey} />
        </Switch>
      </div>
    </Router> 
  );
}

export default App;
