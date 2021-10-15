import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RootReducer from './Store/Reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//UNCOMMENT WHEN IN DEVELOPMENT
const store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunk, logger)));
// const store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = ( <Provider store={store}> <Router> <React.StrictMode> <App /> </React.StrictMode> </Router> </Provider> )
ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
