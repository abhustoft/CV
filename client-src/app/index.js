import React from 'react'
import * as ReactDom from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import todoApp from './redux/reducers'

// Code from http://rackt.org/redux/docs/basics/ExampleTodoList.html

let store = createStore(todoApp)

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
