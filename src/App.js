import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import store, { history } from './store';

import Home from './Home';
import About from './About';

import './App.css';
console.log({store})
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="App">
            <ul className="links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
            <div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
