import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import ProfileView from '../components/ProfileView.ios.js';

// const mapStateToProps = state => ({
//   count: state
// })

const mapDispatchToProps = (dispatch) => ({
  backPreviousView: () => { dispatch({ type: 'BACK' }) },
})

export default connect(null, mapDispatchToProps)(ProfileView);
