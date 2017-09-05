import React, { Component } from 'react';
import { View, Button, Text, ActivityIndicator } from 'react-native';

import InputView from '../components/ControlComponents/InputView';
import NoticeBanner from '../components/NoticeBanner';

const listMessagesErrorData = ['Please enter a valid email & password.'];

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
      isError: false,
      data: [],
      message: ''
    }
    this.email = '';
    this.password = '';
    this.getTextFromComponent = this
      .getTextFromComponent
      .bind(this);
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

    var msg = '';
    const msgServer = nextProps.data.message;
    console.log(msgServer);
    if (msgServer) {
      if (typeof msgServer === 'object')
        msg = msgServer.map(({ message }) => message);
      else
        msg = msgServer;
    }
    this.setState({ data: nextProps.data.data, isError: !this.parseBool(nextProps.data.success), message: msg });
  }

  getTextFromComponent(text, type) {
    switch (type) {
      case 'email':
        this.setStateWhileValidateInput(text, '');
        break;

      case 'password':
        this.setStateWhileValidateInput('', text);
        break;
      default:
        break;
    }
  }

  setStateWhileValidateInput(email, password) {

    var isWrongEmail = this.validateEmail(email);
    if (email.length == 0)
      isWrongEmail = true;
    this.email = email !== undefined ? email : '';
    this.setState({ isErrorEmail: !isWrongEmail, message: '', isError: false });

    var isWrong = this.validatePassword(password);
    if (password.length == 0)
      isWrong = true;
    this.password = password !== undefined ? password : '';
    this.setState({ isErrorPassword: !isWrong, message: '', isError: false });
    // }
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  parseBool(b) {
    if (b === undefined)
      return b;
    return !(/^(false|0)$/i).test(b) && !!b;
  }

  validatePassword(pw) {
    return pw.length > 4;
  }

  validate(onTrue, onFail, isShowAlert) {
    if (this.email !== undefined && this.password !== undefined) {
      if (!this.state.isErrorEmail && !this.state.isErrorPassword && this.email.trim().length > 0 && this.password.trim().length > 0) {
        this.setState({ isError: false, message: undefined });
        if (onTrue)
          onTrue();
        return;
      }
    }
    if (isShowAlert) {

      var randomIndex = (Math.random() * listMessagesErrorData.length) >> 0;
      if (this.indexMSG !== randomIndex)
        this.indexMSG = randomIndex;
      else
        this.indexMSG++;

      if (this.indexMSG === undefined || this.indexMSG > listMessagesErrorData.length - 1)
        this.indexMSG = 0;

      var msg = listMessagesErrorData[this.indexMSG];
      console.log('random MSG', msg);
      this.setState({ isError: true, message: msg });
    }
    if (onFail)
      onFail();

  }

  render() {
    const isFetching = this.props.isFetching;
    var authFailed = this.state.isError;
    const { message } = this.state;
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
        <NoticeBanner
          isError={authFailed}
          message={message} />

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
                onChangeText={this.getTextFromComponent}
              />
              <InputView
                identifier={'password'}
                isPassword={true}
                isError={this.state.isErrorPassword}
                placeholder={'Password'}
                onChangeText={this.getTextFromComponent} />
            </View>
            <View style={{ height: 40, justifyContent: 'center' }}>
              {isFetching ? (
                <ActivityIndicator />
              )
                : (
                  <Button title={'Sign In'} onPress={() => {
                    this.validate(() => {
                      return this.props.authUser(this.email, this.password);
                    }, null, true)
                  }} />
                )}
            </View>

          </View>
        </View>
      </View>
    );
  }
}