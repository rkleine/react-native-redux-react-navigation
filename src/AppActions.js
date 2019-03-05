import { 
  NavigationActions, 
  DrawerActions
} from "react-navigation";

import * as AuthActions from './Auth/AuthActions'
/*
 * action types
 */

export const APP_UPDATE_SECONDS = 'APP_UPDATE_SECONDS'

/*
 * action creators
 */

export const updateSeconds = seconds => ({
  type: APP_UPDATE_SECONDS, seconds
})

export const signOut = AuthActions.signOut

export const back = () => dispatch => dispatch(NavigationActions.back())
export const openDrawer = () => dispatch => dispatch(DrawerActions.openDrawer())