import {
  AUTH_SET_USER_TOKEN,
  AUTH_REMOVE_USER_TOKEN
} from './AuthActions'

const INITIAL_STATE = {
  status: '',
  token: ''
}

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_SET_USER_TOKEN:
      return ({ ...state, token: action.token })
      case AUTH_REMOVE_USER_TOKEN:
      return ({ ...state, token: undefined })
    default:
      return state
  }
}

export default auth