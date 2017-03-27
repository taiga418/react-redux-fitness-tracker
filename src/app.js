import React from 'react'
import { render } from 'react-dom'
// import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import store from './reducers/index'
import DashBoard from './containers/dashboard'

// REACT ROUTER

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';

// import * as chartActions from '../actions/chart'
import reducer from './reducers/index'


const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
)(createStore);


const store = createStoreWithMiddleware(reducer, {});


render(
  <Provider {...{ store }}>
    <DashBoard />
  </Provider>,
  document.getElementById('app')
)
