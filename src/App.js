import React, { Component } from 'react';
import { Provider } from 'react-redux';
import setupStore from './redux/setupStore';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import ArtContainer from './redux/containers/ArtContainer';
import DeviceHistoryContainer from './redux/containers/DeviceHistoryContainer';
import BodyContainer from './redux/containers/BodyContainer';
import BannerContainer from './redux/containers/BannerContainer';
import GmailContainer from './redux/containers/GmailContainer';
import HeaderNavContainer from './redux/containers/HeaderNavContainer';
import InspectorContainer from './redux/containers/InspectorContainer';
import IotProfileContainer from './redux/containers/IotProfileContainer';
import MainContainer from './redux/containers/MainContainer';
import PokemonContainer from './redux/containers/PokemonContainer';
import ResponsiveContainer from './redux/containers/ResponsiveContainer';
import TodoContainer from './redux/containers/TodoContainer';

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
              <Route exact path='/art' component={ArtContainer} />
              <Route exact path='/body' component={BodyContainer} />
              <Route exact path='/devhistory' component={DeviceHistoryContainer} />
              <Route exact path='/gmail' component={GmailContainer} />
              <Route exact path='/banner' component={BannerContainer} />
              <Route exact path='/header' component={HeaderNavContainer} />
              <Route exact path='/inspector' component={InspectorContainer} />
              <Route exact path='/iot' component={IotProfileContainer} />
              <Route exact path='/pokemon' component={PokemonContainer} />
              <Route exact path='/responsive' component={ResponsiveContainer} />
              <Route exact path='/todo' component={TodoContainer} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}
