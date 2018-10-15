import React, { Component } from 'react';
import './App.css';
import BrowserQuery from './query/BrowserQuery'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from './About';
import Login from './query/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/about" component={About}/>
            <Route path="/browserquery" component={BrowserQuery}/>}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
