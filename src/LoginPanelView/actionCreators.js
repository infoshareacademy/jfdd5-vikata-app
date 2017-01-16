/**
 * Created by rafael on 16.01.17.
 */
import {LOGGED_IN, LOG_OUT, FAILED_LOGIN_ATTEMPT} from './actionTypes'

export const inlogged = (user) => ({
  type: LOGGED_IN,
  userData: user
})

export const logOut = () => ({
  type: LOG_OUT
})

export const failedLoginAttempt = () => ({
  type: FAILED_LOGIN_ATTEMPT
})
