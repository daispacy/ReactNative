import React, { Component } from 'react';
import { Button,View,Text } from 'react-native';

export default class HomeView extends Component {
  render() {

    return (
    <View style={{flex:1}}>
      <Text style={{flex:1}}> {this.props.count}</Text>

      <Button
        style={{flex:1}}
        title="See what you next"
        onPress={this.props.gotoGallery}
      />
      <Button
        style={{flex:1}}
        title="Ask Concierge"
        onPress={this.props.gotoAskConcierge}
      />
      <Button
        style={{flex:1}}
        title="Explore"
        onPress={this.props.gotoExplore}
      />
      </View>
    );
  }
}
