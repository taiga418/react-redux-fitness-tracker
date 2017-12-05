import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers/index';
import Root from './components/root';


const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
)(createStore);

const store = createStoreWithMiddleware(reducer, {});

render(
  <Root store={store} />,
  document.getElementById('app')
);
