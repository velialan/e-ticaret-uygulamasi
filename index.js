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
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const myStore = createStore(allReducers, applyMiddleware(thunk));
const persistor = persistStore(myStore);

const Root = () => (
  <Provider store={myStore}>
    <PersistGate loading={null} persistor={persistor}>
      <Router />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);


 