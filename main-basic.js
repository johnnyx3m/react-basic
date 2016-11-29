import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import App from './App.jsx';
import Events from './Events.jsx';
import Change from './Change.jsx';
import Routes from './Routes.jsx';
import Home from './Home.jsx';
import Products from './Products.jsx';
import About from './About.jsx';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Events />, document.getElementById('event'));
ReactDOM.render(<Change />, document.getElementById('onchange'));
ReactDOM.render(
    <Router history = {browserHistory}>
        <Route path = "/" component = {Routes}>
            <IndexRoute component={Home}/>
            <Route path = "home" component = {Home}/>
            <Route path = "products" component = {Products} />
            <Route path = "about" component = {About} />
        </Route>
    </Router>
,document.getElementById('route'))

//
// setTimeout(() => {
//    ReactDOM.unmountComponentAtNode(document.getElementById('event'));}, 10000);
