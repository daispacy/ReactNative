import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import HomeContainer from '../containers/HomeContainer';
import ProfileContainer from '../containers/ProfileContainer';
import SplashContainer from '../containers/SplashContainer';
import GalleryContainer from '../containers/GalleryContainer';
import LoginContainer from '../containers/LoginContainer';

export const AppNavigator = StackNavigator({
  Splash: { screen: SplashContainer },
  Home: { screen: HomeContainer, navigationOptions:()=>({title:'CONCIERGE'}) },
  Profile: { screen: ProfileContainer , navigationOptions:()=>({title:'MY PROFILE'})},
  Gallery: { screen: GalleryContainer },
  Login: { screen: LoginContainer },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
