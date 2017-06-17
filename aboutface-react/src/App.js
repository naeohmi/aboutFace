import React, { Component } from 'react';
import './App.css';
import About from './components/About';
import FourOhFour from './components/FourOhFour';
import LandingPage from './components/LandingPage';
import Navigation from './components/Navigation';
import Extension from './components/Extension';
import Resume from './components/Resume';
import Research from './components/Research';
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
        <div className="app-wrapper container">
          <Navigation />
          <Switch>
            <Route path="/" exact component={() => (<LandingPage />)} />
            <Route path="/extension" exact component={() => (<Extension />)} />
            <Route path="/resume" exact component={() => (<Resume />)} />
            <Route path="/research" exact component={() => (<Research />)} />
            <Route path="/team" exact component={() => (<About />)} />
            <Route path="/*" exact component={() => (<FourOhFour />)} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;