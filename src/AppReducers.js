import { combineReducers } from 'redux'
import {
  createNavigationReducer,
} from 'react-navigation-redux-helpers';

import AppNavigator from './AppNavigator'
import auth from './Auth/AuthReducers'

import {
  APP_UPDATE_SECONDS
} from './AppActions'

export const INITIAL_STATE = {
  seconds: 0
};

const app = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case APP_UPDATE_SECONDS:
      return ({ ...state, seconds: action.seconds })
    default:
      return state
  }
}

const nav = createNavigationReducer(AppNavigator);

const reducers = combineReducers({
  nav,
  app,
  auth
})

export default reducers
