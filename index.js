/**
 * @format
 */
import React from 'react'
import { AppRegistry } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import Router from './src/router';
import { name as appName } from './app.json';
import allReducers from './src/reducer'
import { Provider } from 'react-redux'
import thunk from "redux-thunk"

const myStore = createStore(allReducers, applyMiddleware(thunk));

const Root = () => (
  <Provider store={myStore}>
    <Router /> 
  </Provider> 
);

AppRegistry.registerComponent(appName, () => Root);


