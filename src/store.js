/**
 * Created by mlacki on 16.12.16.
 */
import { createStore, combineReducers } from 'redux'

import { reducer as PartsListReducer } from './PartsListView'


const reducer = combineReducers({
appData: PartsListReducer

})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


// FOR REFERENCE ONLY:
//
// store.subscribe(() => {
//
// })

export default store