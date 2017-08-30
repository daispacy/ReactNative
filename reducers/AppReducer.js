import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants'
import { AppNavigator } from '../navigators/AppNavigator';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Splash');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const initialNavState = AppNavigator.router.getStateForAction(
  firstAction,
  tempNavState
);

const listViewsKeepRoot = ['Profile', 'Explore', 'Gallery', 'ForgetPassword', 'ChangePassword'];
const listViewsResetRoot = ['Home', 'Login', 'Logout'];

function nav(state, action) {
  let nextState;
  // check view valid
  console.log("current state", state);
  if (action.type === 'BACK') {
    nextState = AppNavigator.router.getStateForAction(
      NavigationActions.back(null),
      state
    );

  }
  else if (listViewsKeepRoot.includes(action.type)) {
    nextState = AppNavigator.router.getStateForAction(
      NavigationActions.navigate({ routeName: action.type }),
      state
    );
  }
  else if (listViewsResetRoot.includes(action.type)) {
    console.log(state.routes);
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: action.type })
      ]
    })
    nextState = AppNavigator.router.getStateForAction(
      resetAction,
      state
    );
  }
  else {
    nextState = AppNavigator.router.getStateForAction(action, state);
  }
  console.log("next state", nextState);
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
}

function fetch(state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        data: [],
        isFetching: true
      }
    case FETCHING_DATA_SUCCESS:

      return {
        ...state,
        isFetching: false,
        data: action.data,
        error: false
      }
    case FETCHING_DATA_FAILURE:

      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}

const AppReducer = combineReducers({
  nav,
  fetch
});

export default AppReducer;
