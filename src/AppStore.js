import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers'

import appReducers from './AppReducers'

const navigator = createReactNavigationReduxMiddleware(
  state => state.nav,
)

const store = createStore(appReducers, applyMiddleware(navigator, thunk))

export default store;