import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import  thunk from 'redux-thunk';
import  logger from 'redux-logger';

import './index.css';
import App from './App';
import rootReducer from './reducers';



const store = createStore(rootReducer, applyMiddleware(thunk,logger));


ReactDOM.render(
<Provider store = {store}>
    
    <Router>
    <Route path = '/' component = { App } />
    </Router>

</Provider>
, document.getElementById('root'));


