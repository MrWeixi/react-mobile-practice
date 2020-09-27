import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter'
import { Provider } from 'react-redux'
import configState from './store'

import "./static/css/iconfont.css"
import "./static/css/font.css"
import "./static/css/common.less"

const store =configState();

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
  ,
  document.getElementById('root')
);