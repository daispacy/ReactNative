import React, { Component } from 'react';
import { Image, View, Button,AppRegistry } from 'react-native';

export default  class SplashView extends Component {

  render() {
    return (
      <View style={{flex:1}}>
        <Image
          style={{flex:1, resizeMode:'cover'}}
          source={{uri:'SplashScreen'}}
        />
      </View>
    );
  }
}
