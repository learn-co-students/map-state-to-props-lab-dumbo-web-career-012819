import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import manageUsers from './reducers/manageUsers'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(manageUsers)

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>
  ,
  document.getElementById('root')
);
