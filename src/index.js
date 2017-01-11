import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css';
import { App } from './App'


import { PartsListView } from './PartsListView'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import { Provider } from 'react-redux'
import store from './store'



ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={PartsListView}/>
      <Route path="/parts-list" component={PartsListView}>

      </Route>
    </Route>
  {/*<Route path="*" component={NotFoundView} />*/}
  </Router>
 </Provider>,
  document.getElementById('root')



);




