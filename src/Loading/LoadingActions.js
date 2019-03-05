import { AsyncStorage } from 'react-native'

import { AUTH_SET_USER_TOKEN } from '../Auth/AuthActions'

const sleep = (secs = 1) => new Promise(resolve => 
  setTimeout(resolve, secs * 1000)
)

export const check = () => async (dispatch) => {
  await sleep(0.5)
  const token = await AsyncStorage.getItem('userToken')
  
  return dispatch({
    type: AUTH_SET_USER_TOKEN,
    token
  })
}