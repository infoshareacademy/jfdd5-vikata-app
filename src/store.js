/**
 * Created by mlacki on 16.12.16.
 */
import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer as appReducer } from './App'
import { reducer as loginReducer } from './LoginPanelView'
import { reducer as typesReducer } from './TypesView'
import { reducer as partsReducer } from './PartsListView'

const reducer = combineReducers({
  typesData: typesReducer,
  partsData: partsReducer,
  appData: appReducer,
  logData: loginReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions (thunks) in addition to objects with 'type' attribute
  )
)

const store = createStore(reducer, enhancer);

export default store
