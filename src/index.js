import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import { App } from './App'
import { TypesView } from './TypesView'
import { TypeView } from './TypeView'

import { ShopsView } from './ShopsView'
import { PartsListView } from './PartsListView'
import { PartInfoView } from './PartInfoView'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import { Provider } from 'react-redux'
import store from './store'

import './index.css';

ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/types" component={TypesView}>
        <Route path="/types/:typeId" component={TypeView}/>
      </Route>
    </Route>

    <Route path="/:typeUrlId" component={PartsListView}>
      <Route path="/:typeUrlId/:partId" component={PartInfoView}/>
      <Route path="/:typeUrlId/:partId/2" component={ShopsView}/>
    </Route>


  {/*<Route path="*" component={NotFoundView} />*/}
  </Router>
 </Provider>,
  document.getElementById('root')



);


