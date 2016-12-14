import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import { App } from './App'

import { ShopsView } from './ShopsView'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'


import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}/>

    <Route path="/shops/:shopId" component={ShopsView}/>


  {/*<Route path="*" component={NotFoundView} />*/}
  </Router>,
  document.getElementById('root')



);
