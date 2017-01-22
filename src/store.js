/**
 * Created by mlacki on 16.12.16.
 */
import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import persistState from 'redux-localstorage'
import { reducer as appReducer } from './App'
import { reducer as loginReducer } from './LoginPanelView'
import { reducer as typesReducer } from './TypesView'
import { reducer as partsReducer } from './PartsListView'
import { reducer as partsToSellReducer } from './UserSellListView/addToSellModal'

const reducer = combineReducers({
  typesData: typesReducer,
  partsData: partsReducer,
  appData: appReducer,
  logData: loginReducer,
  partsToSellData: partsToSellReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions (thunks) in addition to objects with 'type' attribute
  ),
  persistState(['logData'])
)

const store = createStore(reducer, enhancer);

export default store
