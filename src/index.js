import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import { App } from './App'
import { TypesView } from './TypesView'
import { TypeView } from './TypeView'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'


import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/types" component={TypesView}>
        <Route path="/types/:typeId" component={TypeView}/>
      </Route>
    </Route>





  {/*<Route path="*" component={NotFoundView} />*/}
  </Router>,
  document.getElementById('root')



);
