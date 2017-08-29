import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import SplashScreen from '../Screen/SplashScreen.ios.js';

// const mapStateToProps = state => ({
//   count: state
// })

const mapDispatchToProps = (dispatch) => ({
  gotoHome: () => { dispatch({ type: 'Home' }) },
  gotoLogin: () => { dispatch({ type: 'Login' }) },
})

export default connect(null, mapDispatchToProps)(SplashScreen);
