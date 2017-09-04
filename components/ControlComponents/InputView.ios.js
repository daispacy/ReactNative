import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

export default class InputView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isError: false,
      message: ''
    };
    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText = (text) => {
    this.setState({ text })
    return this
      .props
      .onChangeText(text, this.props.identifier);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
        <View style={{
          flex: 1
        }}>
          <TextInput
            secureTextEntry={this.props.isPassword || false}
            editable={true}
            style={{
              flex: 1,
              marginLeft: 10,
              marginRight: 10
            }}
            onChangeText={this.onChangeText}
            value={this.state.text}
            placeholder={this.props.placeholder} />
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: this.props.isError
              ? 'red'
              : 'gray',
            justifyContent: 'center',
            display: 'flex'
          }}></View>
      </View>
    );
  }
}