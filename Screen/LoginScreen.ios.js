import React, { Component } from 'react';
import { View, Button, Text, ActivityIndicator } from 'react-native';

import InputView from '../components/ControlComponents/InputView';
import NoticeBanner from '../components/NoticeBanner';

export default class LoginScreen extends Component {

  static navigationOptions = {
    title: null,
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      isErrorPassword: false,
      isErrorEmail: false,
      isError: props.isError,
      isHasShowError: false,
    }
    this.getTextFromComponent = this
      .getTextFromComponent
      .bind(this);
  }

  componentWillUpdate(nextProps) {

  }

  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  getTextFromComponent(text, type) {
    switch (type) {
      case 'email':
        var isWrong = this.validateEmail(text);
        if (text.length == 0)
          isWrong = true;
        this.email = text;
        this.setState({ isErrorEmail: !isWrong });
        break;

      case 'password':
        var isWrong = this.validatePassword(text);
        if (text.length == 0)
          isWrong = true;
        this.password = text;
        this.setState({ isErrorPassword: !isWrong });
        break;
      default:
        break;
    }
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  parseBool(b) {
    if (b === undefined)
      return true;
    return !(/^(false|0)$/i).test(b) && !!b;
  }

  validatePassword(pw) {
    return pw.length > 4;
  }
  render() {
    const isFetching = this.props.isFetching;
    var authFailed = !this.parseBool(this.props.data.success);
    var message = this.props.data.message;

    // authFailed = this.state.isError;
    if (authFailed && this.props.isError) {
      message = 'Request timeout';
    }
    if (message !== undefined) {
      if (typeof message === 'object') {
        message = message.map(({ message }) => message + '\n');
      }
    }
    console.log(message);

    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
        {authFailed && message !== undefined && <NoticeBanner
          isError={true}
          message={message} />}

        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            marginTop: 50,

          }}>
          <View style={{
            height: 170,
            justifyContent: 'center'
          }}>

            <View
              style={{
                justifyContent: 'flex-start',
                marginLeft: 10,
                marginRight: 10,
                marginBottom: 30,
                flex: 1
              }}>
              <InputView
                identifier={'email'}
                placeholder={'Email'}
                isError={this.state.isErrorEmail}
                onChangeText={(text, type) => {
                  this.getTextFromComponent(text, type)
                }} />
              <InputView
                identifier={'password'}
                isPassword={true}
                isError={this.state.isErrorPassword}
                placeholder={'Password'}
                onChangeText={(text, type) => {
                  this.getTextFromComponent(text, type)
                }} />
            </View>
            <View style={{ height: 40, justifyContent: 'center' }}>
              {isFetching ? (
                <ActivityIndicator />
              )
                : (
                  <Button title={'Sign In'} onPress={() => {
                    if (!this.state.isErrorEmail && !this.state.isErrorPassword)
                      return this.props.authUser(this.email, this.password);
                  }} />
                )}
            </View>

          </View>
        </View>
      </View>
    );
  }
}