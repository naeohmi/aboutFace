import React, { Component } from 'react';
import './App.css';
import About from './components/About';
import FourOhFour from './components/FourOhFour';
import LandingPage from './components/LandingPage';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Bootstrap, Navbar } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };
  render() {
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <Navigation />
          <Switch>
            <Route path="/" exact component={() => (<LandingPage />)} />
            <Route path="/about" exact component={() => (<About />)} />

            <Route path="/*" exact component={() => (<FourOhFour />)} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;