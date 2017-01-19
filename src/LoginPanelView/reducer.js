/**
 * Created by rafalmiler on 12.01.17.
 */
import {LOGGED_IN, LOG_OUT, FAILED_LOGIN_ATTEMPT} from './actionTypes'


const initialState = {
  isLogged:false,
  failedLoginAttempt: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        isLogged: true,
        failedLoginAttempt: false,
        loggedUser: action.userData.id,
        loggedUserName: action.userData.name
      }
    case LOG_OUT:
      return {
        ...state,
        isLogged: false,
      }
    case FAILED_LOGIN_ATTEMPT:
      return {
        ...state,
        isLogged: false,
        failedLoginAttempt: true
      }
    default:
      return state
  }
}
