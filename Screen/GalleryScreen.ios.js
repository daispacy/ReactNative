import React, { Component } from 'react';
import { Image, View, Button, AppRegistry } from 'react-native';
import { NavigationActions } from 'react-navigation'
import GalleryView from '../components/GalleryView';

export default class GalleryScreen extends Component {

  static navigationOptions = { title: 'GALLERY', };
  componentDidMount() {

  }
  render() {
    return (
      <GalleryView {...this.props} />
    );
  }
}
