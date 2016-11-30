import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App.jsx'
import Main from './components/Main.jsx'
import NoMatch from './components/NoMatch.jsx'
import fishApp from './reducers'
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAYP-CcDz9Q3MOhi2rqKM8FqE0brkwrC7I",
    authDomain: "plus-6313b.firebaseapp.com",
    databaseURL: "https://plus-6313b.firebaseio.com",
    storageBucket: "plus-6313b.appspot.com"
};

firebase.initializeApp(config);

let store = createStore(fishApp)

render(
    <Provider store={store}>
      <Router history = {browserHistory} path = "/" component={App}>
          <Route path = "/" component = {App} />
          <Route path = "/store/:storename" component = {Main} />
          <Route path="*" component={NoMatch}/>
      </Router>
    </Provider>,
    document.getElementById('app')
)
