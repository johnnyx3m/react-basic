import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import { render } from 'react-dom'
import { createStore } from 'redux'

import {routerApp} from './routerApp.jsx'
import Home from './examples/Home.jsx';
import Products from './examples/Products.jsx';
import About from './examples/About.jsx';

render(
  <Router history = {browserHistory}>
      <Route path = "/" component = {Home}>
          <IndexRoute component={Home}/>
          <Route path = "home" component = {Home}/>
          <Route path = "products" component = {Products} />
          <Route path = "about" component = {About} />
      </Route>
  </Router>
  ,document.getElementById('app')
)
