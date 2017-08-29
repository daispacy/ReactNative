/**
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import AppReducer from './reducers/AppReducer';
import AppWithNavigationState from './navigators/AppNavigator';
import thunk from 'redux-thunk'

export default class AppIOS extends Component {
  store = createStore(AppReducer, applyMiddleware(thunk))

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('TestReactNative', () => AppIOS);
