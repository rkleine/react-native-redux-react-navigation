import { AsyncStorage } from 'react-native'

export const AUTH_SET_USER_TOKEN = 'AUTH_SET_USER_TOKEN'
export const AUTH_REMOVE_USER_TOKEN = 'AUTH_REMOVE_USER_TOKEN'

export const signIn = ({ username, password }) => async (dispatch) => {
  // TODO: signIn to out backend with username and password 
  const token = await Promise.resolve('abs')
  await AsyncStorage.setItem('userToken', token)
  dispatch({
    type: AUTH_SET_USER_TOKEN,
    token
  })
  return token
}

export const signOut = () => async (dispatch) => {
  dispatch({
    type: AUTH_REMOVE_USER_TOKEN
  })
  // TODO: signOut to out backend. Clear cookie, token, session, etc.
  await AsyncStorage.removeItem('userToken')
  await Promise.resolve('signOut')
}