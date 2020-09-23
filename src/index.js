import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter'
import "./static/css/iconfont.css"
import "./static/css/font.css"
import "./static/css/common.less"
ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);