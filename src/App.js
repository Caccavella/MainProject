import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import URLS from './components/URLs/URLS';
import SPLogin from './components/Login/SPLogin';
import Processing from './components/Processing/Processing';

import {Route} from 'react-router-dom';
const createHistory = require('history').createMemoryHistory;
// eslint-disable-next-line
const history = createHistory({ forceRefresh: true });


class App extends Component {
  render() {
    return (
      <div className="App">

        <Route exact path='/' component={Login} />
        <Route path='/urls' component={URLS} />
        <Route path='/sp' component={SPLogin} />
        <Route path='/complete' component={Processing} />
        
      </div>
      
        );
  }
}

export default App;
