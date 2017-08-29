import React, { Component } from 'react';
import { Image, View, Button,AppRegistry,AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation'
import SplashView from '../components/SplashView';

export default class SplashScreen extends Component {

  static navigationOptions = { title: null, header: null };
  componentDidMount() {
      var nextAction = this.props.gotoLogin();
      AsyncStorage.getItem('@userdata', (err, result) => {
          if(err !== null && result) {
              nextAction = this.props.gotoHome();
          }
          setTimeout(() => nextAction, 3000);
      });
  }
  render() {
    return (
        <SplashView/>
    );
  }
}
