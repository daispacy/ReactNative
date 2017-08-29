import React, { Component } from 'react';
import { Button } from 'react-native';

import HomeView from '../components/HomeView.ios.js';

export default class HomeScreen extends Component {

  render() {
    return (
        <HomeView {...this.props}/>
    );
  }
}
