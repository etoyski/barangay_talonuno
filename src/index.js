import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import store from './redux/store';
import * as serviceWorker from './ServiceWorker';
 ReactDOM.render(
  <BrowserRouter>
  
  <React.StrictMode>
  <Provider store={store}>
  <CssBaseline />
    <App />
    </Provider>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
serviceWorker.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
