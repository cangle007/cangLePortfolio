import React, { Component } from 'react';
import { Provider } from 'react-redux';
import setupStore from './redux/setupStore';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import DisplayWorkContainer from './redux/containers/DisplayWorkContainer';
import MainContainer from './redux/containers/MainContainer';

// import createBrowserHistory from 'history/createBrowserHistory';

export const history = createBrowserHistory();
const store = setupStore();

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path='/' component={MainContainer} />
              <Route exact path='/displayWork' component={DisplayWorkContainer} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}
