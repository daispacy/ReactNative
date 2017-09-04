import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import LoginScreen from '../Screen/LoginScreen';
import { authUser } from '../actions'

const mapStateToProps = state => {
  return { data: state.fetch.data, isFetching: state.fetch.isFetching, isError: state.fetch.isError };
}

const mapDispatchToProps = (dispatch) => ({
  authUser: (email, password) => dispatch(authUser(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
