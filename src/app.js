import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import DashBoard from './containers/dashboard'

// TODO: REACT ROUTER

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
