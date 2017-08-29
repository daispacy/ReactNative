import React, { Component } from 'react';
import { Button } from 'react-native';

export default  class ProfileView extends React.Component {

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Button
        title={'Cút'}
        onPress={this.props.backPreviousView}
      />
    );
  }
}
