/**
 * Created by mlacki on 16.12.16.
 */
import { createStore, combineReducers } from 'redux'
import { reducer as appReducer } from './App'
import { reducer as loginReducer } from './LoginPanelView'

const reducer = combineReducers({
  appData: appReducer,
  logData: loginReducer
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store