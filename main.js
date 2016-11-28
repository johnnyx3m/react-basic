import React from 'react'

import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App.jsx'
import fishApp from './reducers'

let store = createStore(fishApp)

render(

   <Provider store = {store}>
      <App />
   </Provider>,
   document.getElementById('app')
)
