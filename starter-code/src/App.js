import React, { Component } from 'react';
import HomePage from './components/HomePage';
import Beers from './components/Beers';
import SingleBeer from './components/SingleBeer';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import { Route } from "react-router-dom";


class App extends Component {
  render() {
    return(
      <div>
        <Route exact path='/' component={ HomePage } />
        <Route exact path="/beers" component={ Beers } />
        <Route exact path="/random-beer" component={ RandomBeer } />
        <Route exact path="/new-beer" component={ NewBeer } />
        <Route exact path='/beers/:id' component={ SingleBeer } />
      </div>
    )
  }
}

export default App;
