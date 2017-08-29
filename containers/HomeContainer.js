import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import HomeScreen from '../Screen/HomeScreen';

// const mapStateToProps = state => ({
//   count: state
// })

const mapDispatchToProps = (dispatch) => ({
  gotoGallery: () => { dispatch({ type: 'Gallery' }) },
  gotoAskConcierge: () => { dispatch({ type: 'Profile' }) },
  gotoExplore: () => { dispatch({ type: 'AskConcierge' }) },
})

export default connect(null,mapDispatchToProps)(HomeScreen)
